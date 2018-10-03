import store from '../store';
import axios from 'axios';
const acc = {
    "idAccount": "4d0270b0-e705-42d9-b870-8ed05338ee39",
    "accountEmailAddress": "abc@gmail.com",
    "accountPassword": "abcd",
    "accountIsAdmin": "true"
};

export function fetchProfile() {
    return function (dispatch) {
        var header = {
            'Access-Control-Allow-Origin': '*'
        };
        dispatch({type: "FETCH_PROFILE"}); //
        axios.post("http://localhost:8080/user/profile?accountID=" + acc.idAccount)
            .then((response) => {
                console.log("TESTING " + response.data.entities);
                dispatch({type: "FETCH_PROFILE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PROFILE_REJECTED", payload: err})
            })
    }
}
