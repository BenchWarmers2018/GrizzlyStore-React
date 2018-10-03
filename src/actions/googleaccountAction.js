import axios from 'axios';

export function fetchGoogleAccounts(user) {
    return function (dispatch) {
        dispatch({type: "FETCH_GOOGLE_ACCOUNTS"});

        //Passing information via axios
        axios.post("http://localhost:8083/googlelogin/googleauthenticate", user)
            .then((res) => {

                console.log(res.data.entities)
                dispatch({type: "FETCH_GOOGLE_ACCOUNTS_FULFILLED", payload: res.data.entities})
            })
                    .catch((err) => {
                    dispatch({type: "FETCH_GOOGLE_ACCOUNTS_REJECTED", payload: err})
            })
    }
}

export function addGoogleAccount(googleEmailAddress) {
    return {
        type: 'GOOGLE_ADD_ITEM',
        payload: {
            googleEmailAddress
        },
    }
}