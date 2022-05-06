import axios from "axios";

export const FETCH_DOGS = "FETCH_DOGS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const SORT = "SORT";

export function fetchDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/dogs")
      .then((allDogs) => {
        dispatch({
          type: FETCH_DOGS,
          payload: allDogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getDogByName(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/dogs?name=${search}`)
      .then((allDogs) => {
        dispatch({
          type: GET_DOG_BY_NAME,
          payload: allDogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function orderById(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/dogs/${id}`)
      .then((dogs) => {
        dispatch({
          type: GET_DOG_BY_ID,
          payload: dogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getTemperaments() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/temperaments")
      .then((temperaments) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
