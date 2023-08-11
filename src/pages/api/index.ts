import Axios from "axios";

const BasicInstance = Axios.create({
  baseURL: "/api",
  timeout: 60000,
});

export { BasicInstance };
