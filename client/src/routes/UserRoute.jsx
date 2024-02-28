import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
import SignUpPage from "../pages/user/SignUp";
import SideBar from "../components/common/SideBar";
import NotFound from "../pages/NotFound";
import UserProtect from "../components/user/UserProtect";

const UserRoute = () => {
  
  return (
    <Routes>
      <Route path="" element={<Navigate to='/login'/>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route element={<UserProtect/>}>
        <Route path="/home" element={<SideBar/>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoute;
