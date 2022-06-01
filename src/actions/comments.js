import { types } from "../types/types"
import { fetchWithOutToken } from "../helpers/fetch"
// import { prepareEvents } from "../helpers/prepareEvents"

export const getComments = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchWithOutToken("comments")
      const body = await resp.json()

      dispatch(commentSetList(body.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const SaveComment = (formData) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchWithOutToken("comments", formData, "POST")
      const body = await resp.json()

      // TODO Validate error no time !!!!!
      console.log(body)
    } catch (error) {
      console.log(error)
    }
  }
}

export const EditComment = (formData) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchWithOutToken("comments", formData, "PUT")
      const body = await resp.json()

      // TODO Validate error no time !!!!!
      console.log(body)
    } catch (error) {
      console.log(error)
    }
  }
}

export const GetComment = (id) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchWithOutToken(`comments/${id}`, "GET")
      const body = await resp.json()

      // TODO Validate error no time !!!!!
      console.log("no entoinendo ", body)
      dispatch(commentSetActual(body.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const commentSetActual = (data) => ({
  type: types.commetActive,
  payload: data,
})

export const commentClearActual = (data) => ({
  type: types.commentClearActive,
  payload: data,
})


const commentSetList = (data) => ({
  type: types.commentLoaded,
  payload: data,
})

export const setTitleHeader = (data) => ({
  type: types.uiTitleHeader,
  payload: data,
})
