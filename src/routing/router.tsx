import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import KnowledgePage from "../components/page/KnowledgePage";

const router = createBrowserRouter([
    {path:"/",element:<App />},
    {path:'/knowledge',element:<KnowledgePage/>}
])
export default router;