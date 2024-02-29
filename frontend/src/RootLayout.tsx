import { Outlet } from "react-router-dom"
import { Toaster } from "./components/ui/sonner"

export const RootLayout = () => {
    return (
        <>
            <Toaster />
            <Outlet />
        </>
    )
}