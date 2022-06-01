import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomeScreen } from "../components/comments/HomeScreen"
import { FormScreen } from "../components/comments/FormScreen"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/add-comments" element={<FormScreen />} />
        <Route path="/edit-comments/:id" element={<FormScreen />} />
        {/* Hp route no match*/}
        <Route element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
