import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import env from "dotenv";
import session from "express-session";
import cors from "cors";

const app = express();
const port = 3000;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);

// Updated to use Neon DB credentials
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates (use cautiously in production)
  },
});

db.connect();

app.get(
  "/auth/google",
  (req, res, next) => {
    const role = req.query.role;
    req.session.role = role; // Store the role in the session
    next();
  },
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    if (req.user.role === "service_provider") {
      res.redirect("http://localhost:5173/service_provider");
    } else {
      res.redirect("http://localhost:5173");
    }
  }
);

app.get("/profile", async (req, res) => {
  if (!req.isAuthenticated() || !req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      req.user.email,
    ]);
    console.log("from backend:- ", req.user.email);
    if (result.rows.length > 0) {
      res.json(result.rows[0]); // Return single user object
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173");
  });
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      passReqToCallback: true,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const userRole = req.session.role;

      try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);

        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, name, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
            [profile.email, profile.given_name, profile.id, userRole]
          );
          cb(null, newUser.rows[0]);
        } else {
          const user = result.rows[0];
          if (user.role !== userRole || user.name !== profile.given_name) {
            await db.query(
              "UPDATE users SET role = $1, name = $2 WHERE email = $3",
              [userRole, profile.given_name, profile.email]
            );
            user.role = userRole;
            user.name = profile.given_name;
          }
          cb(null, result.rows[0]);
        }
      } catch (err) {
        cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
