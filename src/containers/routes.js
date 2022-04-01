import { lazy } from "react";
import { IoIosList } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Navigate } from "react-router-dom";


const SignIn = lazy(() => import("./Auth/signIn"));
const SignUp = lazy(() => import("./Auth/signUp"));
const Home = lazy(() => import("./Dashboard"));
const Products = lazy(() => import("./Products"));
const Profile = lazy(() => import("./Profile"));
const Add = lazy(() => import("./Products/Add"));
const Update = lazy(() => import("./Products/Update"));
const Info = lazy(() => import("./Products/Info"));

const routes = {
  public: [
    {
      path: "/sign-in",
      element: SignIn,
      allowedRoles: ["admin", "user"],
      title: "Sign In",
    },
    {
      path: "/sign-up",
      element: SignUp,
      allowedRoles: ["admin", "user"],
      title: "Sign Up",
    },
    {
      path: "*",
      element: <Navigate to="/sign-in" replace />,
    },
  ],
  private: [
    {
      path: "/",
      element: Home,
      allowedRoles: ["admin", "user"],
      title: "Home",
      icon: <MdDashboard />,
      inHeader: true,
    },
    {
      path: "/products",
      element: Products,
      allowedRoles: ["admin", "user"],
      title: "Products",
      icon: <IoIosList />,
      inHeader: true,
    },
    {
      path: "/products/add",
      element: Add,
      allowedRoles: ["admin", "user"],
      title: "Add product",
      inHeader: false,
    },
    {
      path: "/products/update/:id",
      element: Update,
      allowedRoles: ["admin", "user"],
      title: "Update product",
      inHeader: false,
    },
    {
      path: "/products/:id",
      element: Info,
      allowedRoles: ["admin", "user"],
      title: "Product details",
      inHeader: false,
    },
    {
      path: "/profile",
      element: Profile,
      allowedRoles: ["admin", "user"],
      title: "Profile",
      inHeader: false,
    },
    {
        path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default routes;
