import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RootLayout } from "./RootLayout";
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    )
)

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router