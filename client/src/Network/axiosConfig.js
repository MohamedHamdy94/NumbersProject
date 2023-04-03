import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://api.apilayer.com/number_verification/validate",
    headers:{
      apikey:"5SJy9ufUQ6EFYGUAfQTcMdhNV48A0ztx"
    }
  });
  export const axiosInstanceDB = axios.create({
    baseURL: "http://localhost:5000/api"
  });


  