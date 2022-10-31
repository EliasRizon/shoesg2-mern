import * as api from '../api/api.js'
import {
  END_LOADING,
  FETCH_ALL,
  FETCH_SHOE,
  START_LOADING,
} from '~/constants/actionTypes.js'

export const getShoes = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchShoes()

    dispatch({ type: FETCH_ALL, payload: { data } })
  } catch (error) {
    console.log(error)
  }
}

export const getShoe = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchShoe(id)

    dispatch({ type: FETCH_SHOE, payload: { shoe: data } })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
