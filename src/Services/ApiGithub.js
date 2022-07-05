import axios from "axios";

const ApiGithub = axios.create({
  baseURL: "https://api.github.com/users/Mateus1508/"
});

export default ApiGithub;

