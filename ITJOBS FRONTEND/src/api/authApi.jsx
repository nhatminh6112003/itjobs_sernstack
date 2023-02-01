import axiosClient from "./axiosClient";
const authApi = {
  register(data) {
    const url = `/auth/register`;
    return axiosClient.post(url,data);
  },
  login(data) {
    const url = `/auth/login`;
    return axiosClient.post(url,data);
  },
  logout() {
    const url = `/auth/logout`;
    return axiosClient.post(url);
  },
  refreshToken(){
    const url = `/auth/refresh-token`;
    return axiosClient.post(url);
  }
};
export default authApi;
