import { FETCH_DOGS, GET_DOG_BY_NAME, SORT } from "../actions";
import {ASCEND} from "../../constants/order";
const initialState = {
  dogs: [],
  filteredDogs: [],
  temperaments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload,
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        filteredDogs: action.payload,
      };
    case SORT:
      let orderedDogs = [...state.dogs];
      orderedDogs = orderedDogs.sort((a, b) => {
        if (a.name < b.name) return action.payload === ASCEND ? -1 : 1;
        else if (a.name > b.name) return action.payload === ASCEND ? 1 : -1;
        else return 0;
      });
      return {
        ...state,
        filteredDogs: orderedDogs,
      };
    default:
      return state;
  }
}
