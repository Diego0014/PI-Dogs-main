import {
  FETCH_DOGS,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENTS,
  POST,
  SORT,
} from "../actions";
import { ASCEND, DESCEND, WASCEND, WDESCEND } from "../../constants/order";
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
      if (action.payload === ASCEND || action.payload === DESCEND) {
        orderedDogs = orderedDogs.sort((a, b) => {
          if (a.name < b.name) return action.payload === ASCEND ? -1 : 1;
          else if (a.name > b.name) return action.payload === DESCEND ? 1 : -1;
          else return 0;
        });
      } else {
        orderedDogs = orderedDogs.sort((a, b) => {
          if (parseInt(a.weight) < parseInt(b.weight))
            return action.payload === WASCEND ? -1 : 1;
          else if (parseInt(a.weight) > parseInt(b.weight))
            return action.payload === WDESCEND ? 1 : -1;
          else return 0;
        });
      }
      return {
        ...state,
        filteredDogs: orderedDogs,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case POST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
