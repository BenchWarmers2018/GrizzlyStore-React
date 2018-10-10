import axios from 'axios';
import {
    FETCH_GOOGLE_ACCOUNTS,
    FETCH_GOOGLE_ACCOUNTS_FULFILLED,
    FETCH_GOOGLE_ACCOUNTS_REJECTED,
    URL_GOOGLE_USER
} from "../CONSTANTS";

export function fetchGoogleAccounts(user) {
    return function (dispatch) {
        dispatch({type: FETCH_GOOGLE_ACCOUNTS});

        console.log("User is : ",  user);
        //Passing information via axios
        axios.post(URL_GOOGLE_USER + "/googlelogin/googleauthenticate", user)
            .then((res) => {
                console.log(res.data.Entities);
        dispatch({type: FETCH_GOOGLE_ACCOUNTS_FULFILLED, payload: res.data.Entities[0]})
    })
    .catch((err) => {
            dispatch({type: FETCH_GOOGLE_ACCOUNTS_REJECTED, payload: err})
        })
    }
}