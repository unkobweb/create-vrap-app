import { getTest } from "@/api/default"
import { useQuery } from "@tanstack/react-query"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Ban, Check, Loader } from "lucide-react"

function LoadingData() {
  return (
    <Alert className='text-yellow-500 bg-transparent border border-yellow-500'>
      <Loader color="#EAB308" />
      <AlertTitle>Loading</AlertTitle>
      <AlertDescription>Fetching data</AlertDescription>
    </Alert>
  )
}

function Error() {
  return (
    <Alert variant='destructive'>
      <Ban color='#EF4444' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Can't connect to backend</AlertDescription>
    </Alert>
  )
}

function Success() {
  return (
    <Alert className='text-green-500 bg-transparent border border-green-500'>
      <Check color='#22C55E' />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Connected to backend</AlertDescription>
    </Alert>
  )
}

export function Api() {
  const {isLoading, isError} = useQuery({queryKey: ['test'], queryFn: () => getTest()})

  if (isLoading) {
    return <LoadingData />
  } else if (isError) {
    return <Error />
  } else {
    return <Success />
  }
}