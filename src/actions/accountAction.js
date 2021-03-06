import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../';
import {
    GET_CURRENT_USER,
    GET_CURRENT_USER_FULFILLED,
    GET_CURRENT_USER_REJECTED,
    URL_USER,
    AUTHENTICATE_USER,
    CREATE_ACCOUNT,
    AUTHENTICATING_USER_SUCCESSFUL,
    SERVER_NOT_FOUND,
    AUTHENTICATE_USER_REJECTED,
    CREATE_ACCOUNT_FULFILLED,
    CREATE_ACCOUNT_REJECTED,
    FETCH_PROFILE,
    FETCH_PROFILE_FULFILLED,
    FETCH_PROFILE_REJECTED,
    RESET_USER_ACCOUNT,
    GET_ALL_USERS,
    GET_ALL_USERS_REJECTED,
    GET_ALL_USERS_SUCCESSFUL,
    TOGGLE_USER_ADMIN,
    TOGGLE_USER_ADMIN_REJECTED,
    TOGGLE_USER_ADMIN_SUCCESSFUL,
    RESET_USER_PROFILE,
    FETCH_PROFILE_FULFILLED_AT_STARTUP,
    FETCH_PROFILE_REJECTED_AT_STARTUP
} from "../CONSTANTS";


export function createAccount(user) {
    return function (dispatch) {
        dispatch({type: "CREATE_ACCOUNT"});

        axios.post(URL_USER +"/register/create", user)
            .then((res) => {
                axios.post(URL_USER +"/login/authenticate", user)
                    .then(result => {
                        localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
                        dispatch({type: AUTHENTICATING_USER_SUCCESSFUL, payload: result.data.accessToken})
                    })
                    .catch((error) => {
                        if (error.message === "Network Error" )
                            dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'});
                        else
                            dispatch({type: AUTHENTICATE_USER_REJECTED, payload: error.response.data.errors})
                    })

                dispatch({type: CREATE_ACCOUNT_FULFILLED, payload: res.data.entities})
            })
                    .catch((error) => {
                    dispatch({type: CREATE_ACCOUNT_REJECTED, payload: error.response.data.errors})
            })

    }

}

export function getCurrentUser()
{
    return function (dispatch) {
        dispatch({type: GET_CURRENT_USER});
        if (localStorage.getItem(ACCESS_TOKEN)) {

            const token = localStorage.getItem(ACCESS_TOKEN);
            const headerData = {headers: {Authorization: "Bearer " + token}};

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                data: {},
            };

            axios.get(URL_USER +"/login/user", config)
                .then((result) =>{

                    dispatch({type: FETCH_PROFILE});
                    const account = { "idAccount" : result.data.idAccount }

                    axios.post(URL_USER+"/user/profile", account)
                        .then((response) => {
                            dispatch({type: FETCH_PROFILE_FULFILLED_AT_STARTUP, payload: response.data})
                        })
                        .catch((err) => {
                            dispatch({type: FETCH_PROFILE_REJECTED_AT_STARTUP, payload: err.response.data})
                        })


                    dispatch({type: GET_CURRENT_USER_FULFILLED, payload: result.data})
                }).catch(err =>
                dispatch({type: GET_CURRENT_USER_REJECTED, payload: err})
            )


        }
    }
}

export function authenticateUser(loginData) {
  return function (dispatch) {
    dispatch({type: AUTHENTICATE_USER});

    axios.post(URL_USER + "/login/authenticate", loginData)
      .then(result => {
          localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
          dispatch({type: AUTHENTICATING_USER_SUCCESSFUL, payload: result.data.accessToken})
      })
      .catch((error) => {
        if (error.response.status == 406 || error.response.status == 401)
        {
          dispatch({type: AUTHENTICATE_USER_REJECTED, payload: 'Email address or password is incorrect!'})
        }
        else if (error.message === "Network Error" )
        {
          dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'});
        }
        else
        {
          dispatch({type: AUTHENTICATE_USER_REJECTED, payload: error.response.data.errors})
        }
      })
  }
}


export function resetUserStore() {
    return function (dispatch) {
        dispatch({type: RESET_USER_ACCOUNT});
        dispatch({type:RESET_USER_PROFILE});

    }
}

export function getAllUsers() {
  return function (dispatch) {
      dispatch({type: GET_ALL_USERS});

      axios.get(URL_USER + "/account/all")
        .then(result => {
          dispatch({type: GET_ALL_USERS_SUCCESSFUL, payload: result.data.entities})
        })
        .catch((error) => {
          if (error.message === "Network Error" )
            dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'})
          else
            dispatch({type: GET_ALL_USERS_REJECTED, payload: error.response.data.errors})
        })
  }

}

export function toggleAdminStatus(account) {
  return function (dispatch) {
    dispatch({type: TOGGLE_USER_ADMIN});

    axios.post(URL_USER + "/account/toggleStatus", account)
    .then(result => {
      dispatch({type: TOGGLE_USER_ADMIN_SUCCESSFUL, payload: result.data.entities[0]})
    })
    .catch((error) => {
      if (error.message === "Network Error" )
        dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'})
      else
        dispatch({type: TOGGLE_USER_ADMIN_REJECTED, payload: error.response.data.errors})
    })
  }
}

export function loginRequired() {
  return {
    type: "LOGIN_REQUIRED",
    payload: "You must be logged in to perform this action."
  };
}
