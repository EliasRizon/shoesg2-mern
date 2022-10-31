import { FETCH_ALL, FETCH_SHOE } from '../constants/actionTypes'

export default function shoesReducer(
  state = { isLoading: true, shoes: [] },
  action,
) {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL:
      return { ...state, shoes: action.payload.data }
    case FETCH_SHOE:
      return { ...state, shoe: action.payload.shoe }
    default:
      return state
  }
}
