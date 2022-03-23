import { lazy } from "react"
import {IoIosList, IoIosLogIn, IoIosLogOut} from "react-icons/io"
import {MdDashboard, MdSettings} from "react-icons/md"
import { Navigate } from "react-router-dom"

const SignIn = lazy(() => import("./Auth/signIn"))
const SignUp = lazy(() => import("./Auth/signUp"))
const Home = lazy(() => import("./Dashboard"))
const Products = lazy(() => import("./Products"))
const Profile = lazy(() => import("./Profile"))


const routes = {
    public: [
        {
            path: '/sign-in',
            element: SignIn,
            allowedRoles: ['admin', 'user'],
            title: 'Sign In',
        },
        {
            path: '/sign-up',
            element: SignUp,
            allowedRoles: ['admin', 'user'],
            title: 'Sign Up',
        },
        {
            path: '*',
            element: <Navigate to="/sign-in" replace />,
        }
    ],
    private: [
        {
            path: '/',
            element: Home,
            allowedRoles: ['admin', 'user'],
            title: 'Home',
            icon: <MdDashboard />,
            inHeader: true,
        },
        {
            path: '/products',
            element: Products,
            allowedRoles: ['admin', 'user'],
            title: 'Products',
            icon: <IoIosList />,
            inHeader: true,
        },
        {
            path: '/profile',
            element: Profile,
            allowedRoles: ['admin', 'user'],
            title: 'Profile',
            inHeader: false,
        },
        {
            path: '*',
            element: <Navigate to="/" replace />, 
        }
    ]
}

export default routes