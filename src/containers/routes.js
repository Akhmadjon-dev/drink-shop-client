import { lazy } from "react"
import {IoIosLogIn, IoIosLogOut} from "react-icons/io"
import {MdDashboard, MdSettings} from "react-icons/md"

const SignIn = lazy(() => import("./Auth/signIn"))
const SignUp = lazy(() => import("./Auth/signUp"))
const Home = lazy(() => import("./Dashboard"))


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
            element: SignIn,
        }
    ],
    private: [
        {
            path: '/',
            element: Home,
            allowedRoles: ['admin', 'user'],
            title: 'Home',
            icon: <MdDashboard />,
        },
        {
            path: '*',
            element: Home, 
        }
    ]
}

export default routes