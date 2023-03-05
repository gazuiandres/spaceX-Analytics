import axios from "axios";

export default () => {
  return axios.get(`${import.meta.env.BACKEND_HOST}/launches/falcon9`);
};
