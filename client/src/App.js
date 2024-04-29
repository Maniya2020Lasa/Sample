import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Contact from "./Pages/Conatct.js";
import Policy from "./Pages/Policy.js";
import PageNotFoundPage from "./Pages/PageNotFoundPage";
import Register from "./Pages/Auth/Register.js";
import Login from "./Pages/Auth/Login.js";
import Dashbord from "./Pages/user/Dashbord.js";
import PrivateRoute from "./components/Routes/private";
import ForgotPasssword from "./Pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./Pages/Admin/AdminDashboard.js";
import CreateCategory from "./Pages/Admin/CreateCategory.js";
import CreateProduct from "./Pages/Admin/CreateProduct.js";
import Users from "./Pages/Admin/Users.js";
import Profile from "./Pages/user/Profile.js";
import Orders from "./Pages/user/Orders.js";
import Products from "./Pages/Admin/Products.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword />}></Route>
        <Route path="/dashbord" element={<PrivateRoute />}></Route>
        <Route path="/dashbord/user" element={<Dashbord />}></Route>
        <Route path="/dashbord/user/profile" element={<Profile />}></Route>
        <Route path="/dashbord/user/orders" element={<Orders />}></Route>
        <Route path="/dashbord" element={<AdminRoute />}></Route>
        <Route path="/dashbord/admin" element={<AdminDashboard />}></Route>
        <Route
          path="dashbord/admin/Create-category"
          element={<CreateCategory />}
        ></Route>
        <Route
          path="dashbord/admin/Create-product"
          element={<CreateProduct />}
        ></Route>
        <Route path="dashbord/admin/products" element={<Products />}></Route>
        <Route path="dashbord/admin/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="*" element={<PageNotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
