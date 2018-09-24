import store from '../store';
import axios from 'axios';
const acc = {
    "idAccount": "550fc814-96ad-4d21-a611-dc2fa672c063",
    "accountEmailAddress": "abc@gmail.com",
    "accountPassword": "abcd",
    "accountIsAdmin": "true"
};

const profile = {
    "idProfile": 1,
    "profileFirstName": "avtar",
    "profileLastName": "singh",
    "profilePhoneNumber": "0403566491",
    "profileImage": "image",
    "lastModified": "2018-09-19T04:32:33.000+0000",
    "userAccount": {
        "idAccount": "550fc814-96ad-4d21-a611-dc2fa672c063",
        "accountEmailAddress": "avi@gmail.com",
        "accountPassword": "password",
        "lastModified": "2018-09-19T04:32:33.000+0000",
        "admin": false
    }
};

export function fetchProfile() {
    return function (dispatch) {
        var header = {
            'Access-Control-Allow-Origin': '*'
        }
        dispatch({type: "FETCH_PROFILE"}); //
        axios.post("http://localhost:8080/user/profile?accountID=" + acc.idAccount)
            .then((response) => {
                console.log("TESTING " + response.data.entities[0]);
                dispatch({type: "FETCH_PROFILE_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PROFILE_REJECTED", payload: err})
            })
    }
}
