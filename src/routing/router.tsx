import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ApplicationPage from "../components/page/ApplicationPage";
import ServicePage from "../components/page/ServicePage";

const router = createBrowserRouter([
    {path:"/",element:<App />},
    {path:'/application',element:<ApplicationPage/>},
    {path:'/service',element:<ServicePage/>},
])
export default router;