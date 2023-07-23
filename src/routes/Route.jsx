import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import Login from "../login/Login";
import LoginPage from "../pages/LoginPage";
import Registration from "../components/registration/Registration";
import ForgetPasswordPages from "../pages/ForgetPasswordPages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path:"/login",
                element:<LoginPage></LoginPage>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/forgetpassword",
                element:<ForgetPasswordPages></ForgetPasswordPages>
            }
        ]
    }
])

export default router;