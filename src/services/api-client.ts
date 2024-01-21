import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "023912b3f6b34b64ba0fd5a18ac382d8",
  },
});
