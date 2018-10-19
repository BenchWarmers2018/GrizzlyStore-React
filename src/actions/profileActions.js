import store from '../store';
import axios from 'axios';
import {
    FETCH_PROFILE,
    FETCH_PROFILE_FULFILLED,
    FETCH_PROFILE_REJECTED,
    FETCH_SINGLE_ITEM,
    FETCH_SINGLE_ITEM_FULFILLED,
    FETCH_SINGLE_ITEM_REJECTED,
    RESET_PROFILE_ERRORS,
    UPDATE_PROFILE_ADDRESS,
    UPDATE_PROFILE_ADDRESS_FULFILLED,
    UPDATE_PROFILE_ADDRESS_REJECTED,
    UPDATE_PROFILE_DETAILS,
    UPDATE_PROFILE_DETAILS_FULFILLED,
    UPDATE_PROFILE_DETAILS_REJECTED,
    UPDATE_PROFILE_PASSWORD,
    UPDATE_PROFILE_PASSWORD_FULFILLED, UPDATE_PROFILE_PASSWORD_REJECTED,
    URL_ITEM,
    URL_USER
} from "../CONSTANTS";

const acc = {
    "idAccount": "2e80bab8-b631-4dc5-ad03-27ca8604787e",
    "accountEmailAddress": "abc@gmail.com",
    "accountPassword": "abcd",
    "accountIsAdmin": "true"
};

export function fetchProfile(accountID) {
    return function (dispatch) {
        dispatch({type: FETCH_PROFILE});
        const account = { "idAccount" : accountID}
        axios.post(URL_USER+"/user/profile", account)
            .then((response) => {
                dispatch({type: FETCH_PROFILE_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_PROFILE_REJECTED, payload: err.response.data})
            })
    }
}

export function submitPersonalDetails(profileData) {
    return function (dispatch) {

        dispatch({type: UPDATE_PROFILE_DETAILS}); //

        let data = new FormData();
        data.append('file', profileData.image);
        data.append('firstName', profileData.firstName);
        data.append('lastName', profileData.lastName);
        data.append('phone', profileData.phone);
        data.append('accountID', profileData.accountID);

        console.log("User data to be sent ", data);
        axios.post(URL_USER+"/user/update-personal", data)
            .then((response) => {
                console.log("Updating profile successful " + response);
                dispatch({type: UPDATE_PROFILE_DETAILS_FULFILLED, payload: response.data})
            }).catch((err) => {
            dispatch({type: UPDATE_PROFILE_DETAILS_REJECTED, payload: err.response.data})
        })
    }
}

export function submitPassword(profileData) {
    return function (dispatch) {

        dispatch({type: UPDATE_PROFILE_PASSWORD}); //
        console.log(profileData);
        axios.post(URL_USER+"/user/update-password", profileData)
            .then((response) => {
                console.log("Updating profile successful " + JSON.stringify(response.data));
                dispatch({type: UPDATE_PROFILE_PASSWORD_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                dispatch({type: UPDATE_PROFILE_PASSWORD_REJECTED, payload: err.response.data})

            })
    }
}


export function updateAddress(account) {
    return function(dispatch) {
        dispatch({type: UPDATE_PROFILE_ADDRESS});

        axios.post(URL_USER + "/user/update-address", account)
            .then((response) => {
                dispatch({type: UPDATE_PROFILE_ADDRESS_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: UPDATE_PROFILE_ADDRESS_REJECTED, payload: err.response.data})
            })
    }
}

export function resetErrorsAndStatus() {
    return function (dispatch) {
        dispatch({type: RESET_PROFILE_ERRORS})
    }
}
