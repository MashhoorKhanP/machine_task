import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoute from "./routes/UserRoute";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
      <Routes>
      <Route path="/*" element={<UserRoute />} />
      </Routes>
    </>
  );
}

export default App;
