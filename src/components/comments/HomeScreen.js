import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { setTitleHeader } from "../../actions/comments"
import { List } from "./List"
import { useDispatch } from "react-redux"

export const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTitleHeader("Lista de Comentarios"))
  }, [])

  return (
    <>
      <List />
    </>
  )
}
