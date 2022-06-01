import { types } from "../types/types"

const initialState = {
  comments: [],
  commentActual: {
    name: "",
    email: "",
    website: "",
    comments: "",
  },
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.commetActive:
      return {
        ...state,
        commentActual: action.payload,
      }
   
    case types.commentClearActive:
      return {
        ...state,
        commentActual: null,
      }

    // case types.commentUpdated:
    //   return {
    //     ...state,
    //     events: state.events.map((e) =>
    //       e.id === action.payload.id ? action.payload : e
    //     ),
    //   }


    case types.commentLoaded:
      return {
        ...state,
        comments: [...action.payload],
      }



    default:
      return state
  }
}
