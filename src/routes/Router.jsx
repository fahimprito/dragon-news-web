import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../pages/About";
import Login from "../pages/Login";
import CategoryNews from "../components/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/news.json"),
                children: [
                    {
                        path: "/",
                        element: <CategoryNews></CategoryNews>,
                        loader: () => fetch("/news.json")
                    },
                    {
                        path: "/category/:category_id",
                        element: <CategoryNews></CategoryNews>,
                        loader: () => fetch("/news.json")
                    }
                ]
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/news",
                element: <div>news</div>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ]
    },
]);

export default router;