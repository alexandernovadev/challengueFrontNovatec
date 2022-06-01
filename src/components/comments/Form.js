import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import {
  SaveComment,
  GetComment,
  EditComment,
  commentClearActual,
} from "../../actions/comments"

const baseUrl = process.env.REACT_APP_API_URL

export const Form = ({ id }) => {
  // recupera el date

  const [ID, setID] = useState(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { commentActual } = useSelector((state) => state.comment)

  const [formValues, handleInputChange,setdata] = useForm(commentActual)

  useEffect(() => {
    const getData = async () => {
      if (id) {
        await dispatch(GetComment(id))
        setdata(commentActual)
      }
    }
    getData()

    // return () => {
    //   dispatch(commentClearActual())
    // }
  }, [ID])

  const handleSearch = async (e) => {
    e.preventDefault()

    if (id) {
      await dispatch(EditComment(formValues, id))
    } else {
      await dispatch(SaveComment(formValues))
    }

    navigate("/", { replace: true })
  }

  return (
    <form onSubmit={handleSearch} style={{ maxWidth: 560 }}>
      <div className="inputcontainer">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Alexander Nova"
          name="name"
          autoComplete="off"
          required
          // pattern="^[a-zA-Z]{35}"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="inputcontainer">
        <label>Email</label>
        <input
          type="email"
          placeholder="Alexander Nova"
          name="email"
          required
          autoComplete="off"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="inputcontainer">
        <label>WebSite</label>
        <input
          type="url"
          placeholder="Alexander Nova"
          name="website"
          autoComplete="off"
          value={formValues.website}
          onChange={handleInputChange}
        />
      </div>

      <div className="inputcontainer">
        <label>Comments</label>
        <textarea
          name="comments"
          placeholder="Alexander Nova"
          rows="10"
          value={formValues.comments}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <section style={{ marginTop: 10 }}>
        <button>{!id ? "Guardar" : "Editar"}</button>
        <Link to="/">Regresar</Link>
      </section>
    </form>
  )
}
