import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux"
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
  const user=useSelector(state=>state.auth.login.currentUser);

  let auth = { token: user?.accessToken };
  
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
