import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import SideBar from "../common/SideBar";

const UserProtect = () => {
  const { userLoggedIn } = useSelector((state) => state.auth);
  return userLoggedIn ? (
    <section >
      {/* <SideBar/> */}
      <Outlet/>
    </section>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserProtect;
