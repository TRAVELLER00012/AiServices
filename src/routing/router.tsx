import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ApplicationPage from "../components/page/ApplicationPage";

const router = createBrowserRouter([
    {path:"/",element:<App />},
    {path:'/application',element:<ApplicationPage/>}
])
export default router;