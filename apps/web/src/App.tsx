// src/App.tsx
import { useAuthenticator } from "@aws-amplify/ui-react"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"

function App() {
  const { authStatus } = useAuthenticator((context) => [
    context.user,
    context.authStatus,
  ])

  if (authStatus === "configuring") {
    return <div>Loading...</div>
  }

  return <RouterProvider context={{ authStatus }} router={router} />
}

export default App
