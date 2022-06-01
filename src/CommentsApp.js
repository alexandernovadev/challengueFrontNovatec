import React from "react"
import { Provider } from "react-redux"

import { store } from "./store/store"
import { AppRouter } from "./router/AppRouter"
import { Header } from "./components/shared/Header"
import { Footer } from "./components/shared/Footer"

import "./styles/components/shared/Main.scss"

export const CommentsApp = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="maincontent">
        <section className="content">
          <AppRouter />
        </section>
      </div>
      <Footer />
    </Provider>
  )
}
