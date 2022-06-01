import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { CommentsApp } from "./CommentsApp"
// import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CommentsApp />
  </React.StrictMode>
)

// reportWebVitals()
