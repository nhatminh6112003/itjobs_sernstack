import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux"
import config from "~/config/config.routes";
import authApi from "~/api/authApi";

const PrivateRoutes = () => {
  //sử dụng cú pháp nested route
  //Đê tạo ra một nested route thì sử dụng cú pháp <Route element={parent}> <Route element={child}/> </Route>
  //Với parent là component cha và bên trong chứa component con
  //Ở đây khi người dùng truy cập một route được bảo vệ bằng component cha thì 
  //component cha sẽ kiểm tra xem là người dùng đã đăng nhập hay chưa nếu người dùng đã đăng nhập thì Outlet sẽ render ra nội dung của đường dẫn mà ta truy cập 
    

  // <Route element={<PrivateRoutes />}>
  //                 <Route
  //                   key={index}
  //                   path={route.path}
  //                   element={  
  //                     <Layout>
  //                       <Page />
  //                     </Layout>
  //                   }
  //                 />
  //               </Route>
  const currentUser=useSelector(state=>state.auth.login.currentUser);
  
  return currentUser ? <Outlet /> : <Navigate to={config.jobSeekerRoutes.login} />;
};

export default PrivateRoutes;
