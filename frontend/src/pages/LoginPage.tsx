import { login } from "@/api/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function handleLogin() {
        await login(email, password)
    }

    return (
        <div className="flex flex-col h-screen w-screen text-white bg-gray-800 items-center justify-center">
            <div className="flex flex-col gap-2">
                <h1>Bonjour</h1>
                <Input type="text" className="bg-gray-600 border-none" onChange={e => setEmail(e.target.value)} value={email} />
                <Input type="password" className="bg-gray-600 border-none" onChange={e => setPassword(e.target.value)} value={password} />
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}