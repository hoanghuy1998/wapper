import api from "./api";
const name = () => api.get(api.url.blogs);
const blogService = {
  name,
};
export default blogService;
