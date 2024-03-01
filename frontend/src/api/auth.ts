import { toast } from "sonner"
import { fetcher } from "./utils"
import { API_TOKEN_KEY } from "@/constants"
import { User } from "@/types/User"

export const login = async (email: string, password: string) => {
    const login: any = await fetcher('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    })
    if (login.type === "bearer") {
        localStorage.setItem(API_TOKEN_KEY, login.value)
        window.location.href = '/dashboard'
    } else {
        toast("Login error", {
            description: "Please check your email and password",
        })
    }
  }

export const getUser = async () => {
    return fetcher<{user: User}>('/user')
}