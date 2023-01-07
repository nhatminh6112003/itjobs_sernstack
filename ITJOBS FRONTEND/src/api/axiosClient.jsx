import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8085/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      const newAccessToken = await axiosClient.post("users/refresh-token", {
        withCredentials: true,
      });
      return axiosClient({
        ...prevRequest,
        headers: {
          ...prevRequest.headers,
          Authorization: `Bearer ${newAccessToken.data.accessToken}`,
        },
        sent: true,
      });
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
// axiosClient.interceptors.response.use(
//   (resp) => resp,
//   async (error) => {
//     console.log(error)
//     if (error?.response?.status === 401) {
//       const response = await axiosClient.get('users/refresh-token', { withCredentials: true });

//       if (response.status === 200) {
//         axiosClient.defaults.headers.common['Authorization'] =`Bearer ${response.data.accessToken}` ;
//         console.log('a')
//         return axiosClient(error.config);
//       }
//     }
//   }
// );

export default axiosClient;
