import { types } from "../types/types"
import { fetchWithOutToken } from "../helpers/fetch"

export const uiTitleHeader = () => ({ type: types.uiTitleHeader })

export const GetVersion = (formData) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetchWithOutToken("version", "GET")
      const body = await resp.json()

      dispatch(SetVersion(body.version))
    } catch (error) {
      console.log(error)
    }
  }
}

const SetVersion = (data) => ({
  type: types.version,
  payload: data,
})
