import axios from 'axios';

export function addCategory(category) {
  return function (dispatch) {
    dispatch({type: "ADD_CATEGORY"});

    axios.post("http://localhost:10005/category/add", category)
      .then(result => {
        console.log(result);
        console.log(result.data);
        dispatch({type: "ADD_CATEGORY_SUCCESSFUL", payload: result.data.entities})
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error" )
          dispatch({type: "SERVER_NOT_FOUND", payload: 'The server is currently offline. Please try again later.'})
        else
          dispatch({type: "ADD_CATEGORY_REJECTED", payload: error.response.data.errors})
      })
  }
}
