import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetVersion } from "../../actions/ui"

import "../../styles/components/shared/Footer.scss"

export const Footer = () => {

  const dispatch = useDispatch()
  const { version } = useSelector((state) => state.ui)

  useEffect(() => {
    dispatch(GetVersion())
  }, [])

  return (
  <div className="footer">
    
   V {version}
  </div>)
}
