import { Navigate, createBrowserRouter } from "react-router-dom"
import DashLayout from "../layouts/DashboardLayout"
import DashboardApp from "../pages/dashboardApp/DashboardApp"
import Ecommerce from "../pages/ecommerce/Ecommerce"
import Analytics from "../pages/analytics/Analytics"
import Users from "../pages/users/Users"
import Products from "../pages/products/Products"
import Orders from "../pages/orders/Orders"
import Invoices from "../pages/invoices/Invoices"
import Blogs from "../pages/blogs/Blogs"
import List from "../pages/list/List"
import Jobs from "../pages/jobs/Jobs"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import ForgotPw from "../pages/forgotPw/ForgotPw"
import NewPw from "../pages/newPw/NewPw"
import AuthGuard from "../utils/AuthGuard"
import AuthLayout from "../layouts/AuthLayout"


const router = createBrowserRouter([

  {
    path: "/",
    element: <Navigate to={"/auth/login"} />
  },

  // AUTH PAGES 

  {
    path: "auth",
    element: <AuthGuard>
      <AuthLayout />
    </AuthGuard>

    ,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgotPw",
        element: <ForgotPw />
      },
      {
        path: "newPw",
        element: <NewPw />
      }
    ]
  },


  // DASHBOARD APP 
  {
    path: "dashboard",
    element: <AuthGuard>
      <DashLayout />
    </AuthGuard>,
    children: [
      {
        path: "app",
        element: <DashboardApp />
      },
      {
        path: "ecommerce",
        element: <Ecommerce />
      },
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "invoices",
        element: <Invoices />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "list",
        element: <List />
      },
      {
        path: "jobs",
        element: <Jobs />
      },
    ]
  },

])




export default router