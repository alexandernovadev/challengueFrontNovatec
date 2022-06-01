import React from "react"
import { useSelector } from "react-redux"
import "../../styles/components/shared/Header.scss"

export const Header = () => {
  const { titleHeader } = useSelector((state) => state.ui)

  return (
    <>
      <div className="header">
        <h1>{titleHeader}</h1>
      </div>
    </>
  )
}
