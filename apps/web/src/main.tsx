import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Amplify } from "aws-amplify"
import awsExports from "./aws-exports"
import { Authenticator } from "@aws-amplify/ui-react"

Amplify.configure(awsExports)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>
)
