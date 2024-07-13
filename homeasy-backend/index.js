import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import env from "dotenv";

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
  
  const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  db.connect();

  app.get("/auth/google",
    passport.authenticate("google",{
    scope: ["profile" ,"email"],
  }))
  app.get("/auth/google/secrets",passport.authenticate("google",{
    successRedirect: "/secrets",
    failureRedirect: "/login",
    })
  )
  app.get("/logout", (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

  passport.use("google",new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  },async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    try{
      const result = await db.query("SELECT *FROM users WHERE email = $1",[profile.email])
      if(result.rows.length ===0){
        const newUser =  await db.query("INSERT INTO users (email,password) VALUES ($1,$2)", [profile.email, profile.id])
        cb(null, newUser.rows[0]);
        
      }else{
        cb(null, result.rows[0])
      }
  
    }catch(err){
      cb(err);
    }
  })
  )

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  