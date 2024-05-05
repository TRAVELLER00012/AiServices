import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ApplicationPage from "../components/page/ApplicationPage";
import ServicePage from "../components/page/ServicePage";
import ContactUsPage from "../components/page/ContactUsPage";
import LoginPage from "../components/page/LoginPage";
import RegisterPage from "../components/page/RegisterPage";
import MainPage from "../MainPage/MainPage";


const router = createBrowserRouter([
    {path:"/",element:<App />},
    {path:'/application',element:<ApplicationPage/>},
    {path:'/service',element:<ServicePage/>},
    {path:'/contact',element:<ContactUsPage/>},
    {path:"/login",element:<LoginPage />},
    {path:"/register",element:<RegisterPage />},
    {path:"/mainpage",children:[
        {path:"",element:<MainPage />}
    ]},
])
export default router;