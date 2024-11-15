import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../pages/About";
import Login from "../pages/Login";
import CategoryNews from "../components/CategoryNews/CategoryNews";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
                path: "/news/:id",
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch("/news.json"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;