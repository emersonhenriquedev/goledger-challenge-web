import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://ec2-54-91-215-149.compute-1.amazonaws.com/api",
  auth: {
    username: '',
    password: '',
  },
});

export { httpClient };
