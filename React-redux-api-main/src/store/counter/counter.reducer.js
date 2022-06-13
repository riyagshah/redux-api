import {

    INCREMENT_COUNTER,DECREMENT_COUNTER
} from "./counter.type"

export const counterReducer= (state={count:0},{type})=> {
  switch (type) {

  case INCREMENT_COUNTER:{
      state.count++;
      
    return { ...state}
  }
  case DECREMENT_COUNTER:{
      state.count--;
    return { ...state }
  }
  default:
    return state
  }
}
