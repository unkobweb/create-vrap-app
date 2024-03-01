import { getUser } from "@/api/auth"
import { useQuery } from "@tanstack/react-query"

export const Dashboard = () => {
    const {data, isLoading, isError} = useQuery({ queryKey: ['user'], queryFn: () => getUser() })    

    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center">
            <h1>Dashboard</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {data?.user && <p>Welcome, {data.user.email}</p>}
        </div>
    )
}