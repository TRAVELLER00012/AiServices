import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ApplicationPage from "../components/page/ApplicationPage";
import ServicePage from "../components/page/ServicePage";
import ContactUsPage from "../components/page/ContactUsPage";

const router = createBrowserRouter([
    {path:"/",element:<App />},
    {path:'/application',element:<ApplicationPage/>},
    {path:'/service',element:<ServicePage/>},
    {path:'/contact',element:<ContactUsPage/>},
])
export default router;