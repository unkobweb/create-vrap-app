import { Outlet } from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import { ModeToggle } from "./components/mode-toggle"

export const RootLayout = () => {
    return (
        <>
            <div className="absolute top-4 left-4">
                <ModeToggle />
            </div>
            <Toaster />
            <Outlet />
        </>
    )
}