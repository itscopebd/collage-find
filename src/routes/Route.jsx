import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import Login from "../login/Login";
import LoginPage from "../pages/LoginPage";
import Registration from "../components/registration/Registration";
import ForgetPasswordPages from "../pages/ForgetPasswordPages";
import CollegeList from "../components/CollegeList/CollegeList";
import Admission from "../pages/Admission";
import AdmissionForm from "../AdmissionForm/AdmissionForm";

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
            },
            {
                path:"/colleges",
                element:<CollegeList></CollegeList>
            },
            {
                path:"/admission",
                element:<Admission></Admission>
            },
            {
                path:"/addmission-form",
                element:<AdmissionForm></AdmissionForm>
            }
        ]
    }
])

export default router;