import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../';



export function createAccount(user) {
    return function (dispatch) {
        dispatch({type: "CREATE_ACCOUNT"});

        axios.post("http://localhost:8080/register/create", user)
            .then((res) => {
                dispatch({type: "CREATE_ACCOUNT_FULFILLED", payload: res.data.entities})
            })
                    .catch((error) => {
                    dispatch({type: "CREATE_ACCOUNT_REJECTED", payload: error.response.data.errors})
            })
    }
}

export function getCurrentUser()
{
    return function (dispatch) {
        //localStorage.removeItem(ACCESS_TOKEN);
        console.log("IM herewerwerewrewrewr", localStorage.getItem(ACCESS_TOKEN));
        if (localStorage.getItem(ACCESS_TOKEN)) {

            const token = localStorage.getItem(ACCESS_TOKEN);
            const headerData = {headers: {Authorization: "Bearer " + token}}

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                data: {},
            };

            console.log("I tried to post");
            axios.get("http://localhost:8080/login/user", config)
                .then(result => {
                    console.log(result.data);
                    dispatch({type: "GET_CURRENT_USER_FULFILLED", payload: result.data})
                }).catch(err =>
                dispatch({type: "GET_CURRENT_USER_REJECTED", payload: err})
            )


        }
    }
}


export function authenticateUser(loginData) {
  return function (dispatch) {
    dispatch({type: "AUTHENTICATE_USER"});

    axios.post('http://localhost:8080/login/authenticate', loginData)
      .then(result => {

          localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
          dispatch({type: "AUTHENTICATING_USER_SUCCESSFUL", payload: result.data.accessToken})
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error" )
          dispatch({type: "SERVER_NOT_FOUND", payload: 'The server is currently offline. Please try again later.'})
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
