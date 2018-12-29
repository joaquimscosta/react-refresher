import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // never, ever, manipulate the state directly
      // state.push(action.payload.data) BAD
      // return state.concat([action.payload.data])
      return [action.payload.data, ...state]
  }
  return state
}
