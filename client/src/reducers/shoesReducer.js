import { FETCH_ALL } from '../constants/actionTypes'

export default function shoesReducer(state = { shoes: [] }, action) {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        shoes: action.payload.data,
      }
    default:
      return state
  }
}
