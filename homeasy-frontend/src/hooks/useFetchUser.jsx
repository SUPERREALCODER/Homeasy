import axios from "axios";
import { useEffect, useState } from "react";

const useFetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("https://homeasy.onrender.com/profile", {
          withCredentials: true,
        });
        // console.log(result.data);
        if (result.data) {
          setUser(result.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchData();
  }, []);

  return user;
};

export default useFetchUser;
