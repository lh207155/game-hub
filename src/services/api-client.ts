import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe27239e657340dcaf94444e5248e2ee",
  },
});
