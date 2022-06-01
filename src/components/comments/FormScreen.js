import React from "react"
import { Form } from "./Form"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation,useParams } from "react-router-dom"
import { setTitleHeader } from "../../actions/comments"

export const FormScreen = () => {

  const location = useLocation()
  let { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (id) {
      dispatch(setTitleHeader('Editar Comentario'))
    }else{

      dispatch(setTitleHeader('Agregar Comentario'))
    }
  }, [])
  

  return (
    <div>
      <Form id={id}/>
    </div>
  )
}
