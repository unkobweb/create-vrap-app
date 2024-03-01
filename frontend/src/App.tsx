

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './Router'
import { ThemeProvider } from './components/theme-provider'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark' storageKey='vrap-ui-theme'>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
