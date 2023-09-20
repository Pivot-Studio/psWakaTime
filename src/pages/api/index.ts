import Axios from "axios";

const BasicInstance = Axios.create({
  baseURL: "http://43.154.191.136:81/api",
  timeout: 30000,
});

export { BasicInstance };
