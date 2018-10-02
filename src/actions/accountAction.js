import axios from 'axios';

export function createAccount(user) {
    return function (dispatch) {
        dispatch({type: "CREATE_ACCOUNT"});

        axios.post("http://localhost:8080/register/create", user)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                dispatch({type: "CREATE_ACCOUNT_FULFILLED", payload: res.data.entities})
            })
                .catch((err) => {
                dispatch({type: "CREATE_ACCOUNT_REJECTED", payload: err})
            })
    }
}

export function authenticateUser(loginData) {
  return function (dispatch) {
    dispatch({type: "AUTHENTICATE_USER"});

    axios.post('http://localhost:8080/login/authenticate', loginData)
      .then(result => {
        console.log(result);
        console.log(result.data);
        dispatch({type: "AUTHENTICATE_USER_SUCCESSFUL", payload: result.data.entities})
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error" )
          dispatch({type: "SERVER_NOT_FOUND", payload: 'The server is currently offline. Please try again later.'});
        else
          dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: error.response.data.errors})
      })
  }
}

export function loginRequired() {
  return {
    type: "LOGIN_REQUIRED",
    payload: "You must be logged in to perform this action."
  };
}
