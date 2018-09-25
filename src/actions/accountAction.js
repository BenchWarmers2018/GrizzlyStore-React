import axios from 'axios';

export function fetchAccounts(user) {
    return function (dispatch) {
        dispatch({type: "FETCH_ACCOUNTS"});

        axios.post("http://localhost:8080/register/create", user)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                dispatch({type: "FETCH_ACCOUNTS_FULFILLED", payload: res.data.entities})
            })
                    .catch((err) => {
                    dispatch({type: "FETCH_ACCOUNTS_REJECTED", payload: err})
            })
    }
}

export function addAccount(emailAddress, password) {
    return {
        type: 'ADD_ITEM',
        payload: {
            emailAddress,
            password
        },
    }
}