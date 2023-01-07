import { useSelector } from "react-redux";
import axiosClient from "~/api/axiosClient";
import { useDispatch } from "react-redux";

import { logoutSuccess  } from "~/features/authentication/slices/authSlice";

const Home = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  
  const dispatch=useDispatch();
  const logout = () => {
    try {
      axiosClient
      .post("/users/logout", {}, { withCredentials: true });
      dispatch(logoutSuccess());
    } catch (error) {
      
    }
  };

  return (
    <>
      {user && <div>Xin chào {user.name}</div>}
      <button className="button green" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Home;
