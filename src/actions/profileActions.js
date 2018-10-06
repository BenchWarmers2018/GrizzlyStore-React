import store from '../store';
import axios from 'axios';
const acc = {
    "idAccount": "7e5e9e83-6bc8-4e8e-a933-dfb98be47519",
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
        axios.post("http://localhost:10003/user/profile?accountID=" + acc.idAccount)
            .then((response) => {
                console.log("TESTING " + response.data.entities);
                dispatch({type: "FETCH_PROFILE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PROFILE_REJECTED", payload: err})
            })
    }
}
