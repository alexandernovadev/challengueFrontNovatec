import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search } from "./Search"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../../actions/comments"

export const List = () => {
  const dispatch = useDispatch()
  const { comments } = useSelector((state) => state.comment)

  useEffect(() => {
    dispatch(getComments())
  }, [])

  return (
    <div>
      <Link to="/add-comments">Add</Link>

      <Search />

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>WebSite</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {comments.length > 0 &&
            comments.map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.website ? x.website : "N/D"}</td>
                <td>
                  <button>
                    <Link to={`/edit-comments/${x._id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
