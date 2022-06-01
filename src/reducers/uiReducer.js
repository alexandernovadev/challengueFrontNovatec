import { types } from "../types/types"

const initialState = {
  titleHeader: "Lista de Comentarios",
  version: "",
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiTitleHeader:
      return {
        ...state,
        titleHeader: action.payload,
      }

    case types.version:
      return {
        ...state,
        version: action.payload,
      }
    default:
      return state
  }
}
