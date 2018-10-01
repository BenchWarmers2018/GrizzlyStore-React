import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../';

export function createAccount(user) {
    return function (dispatch) {
        dispatch({type: "CREATE_ACCOUNT"});

        axios.post("http://localhost:8080/register/create", user)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.errors);
                console.log("this user is" + user)
                dispatch({type: "CREATE_ACCOUNT_FULFILLED", payload: res.data.entities})
            })
                    .catch((error) => {
                        console.log(error.response.status);
                    dispatch({type: "CREATE_ACCOUNT_REJECTED", payload: error.response.data.errors})
            })
    }
}

export function getCurrentUser()
{
    if(!localStorage.getItem(ACCESS_TOKEN))
    {
        return Promise.reject("No access token set");
    }
}

