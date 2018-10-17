import store from '../store';
import axios from 'axios';
import {
    FETCH_SINGLE_ITEM,
    FETCH_SINGLE_ITEM_FULFILLED,
    FETCH_SINGLE_ITEM_REJECTED, RESET_PROFILE_ERRORS,
    UPDATE_PROFILE_ADDRESS, UPDATE_PROFILE_ADDRESS_FULFILLED, UPDATE_PROFILE_ADDRESS_REJECTED,
    URL_ITEM, URL_USER
} from "../CONSTANTS";

const acc = {
    "idAccount": "2e80bab8-b631-4dc5-ad03-27ca8604787e",
    "accountEmailAddress": "abc@gmail.com",
    "accountPassword": "abcd",
    "accountIsAdmin": "true"
};

export function fetchProfile(accountID) {
    return function (dispatch) {
        dispatch({type: "FETCH_PROFILE"});
        const account = { "idAccount" : accountID}
        axios.post(URL_USER+"/user/profile", account)
            .then((response) => {
                dispatch({type: "FETCH_PROFILE_FULFILLED", payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PROFILE_REJECTED", payload: err})
            })
    }
}

export function submitPersonalDetails(profileData, accountID = '') {
    return function (dispatch) {
        let header = {
            'SUBMISSION_TYPE': 'Personal',
            'accountID': acc.idAccount,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
        };
        console.log('image being sent . . .');
        console.log(profileData);
        let data = new FormData();
        data.append('file', profileData.image);
        data.append('firstName', profileData.firstName);
        data.append('lastName', profileData.lastName);
        data.append('phone', profileData.phone);
        console.log(data.get('file'));
        console.log(' new data being sent . . .');
        dispatch({type: "SUBMIT_PROFILE"}); //
        axios.post("http://localhost:10003/user/update-personal", data, {headers: header})
            .then((response) => {
                console.log("Updating profile successful " + response);
                dispatch({type: "SUBMIT_PROFILE_ACCEPTED", payload: response.data})
            })
            .catch((err) => {
                console.log("Update file unsuccessful. Error: " + err);
            }).catch((err) => {
            dispatch({type: "SUBMIT_PROFILE_REJECTED", payload: err})
        })
    }
}

export function submitPassword(profileData) {
    return function (dispatch) {

        dispatch({type: "SUBMIT_PROFILE"}); //
        console.log(profileData);
        axios.post(URL_USER+"/user/update-profile", profileData)
            .then((response) => {
                console.log("Updating profile successful " + JSON.stringify(response.data));
                dispatch({type: "SUBMIT_PROFILE_ACCEPTED", payload: response.data})
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                dispatch({type: "SUBMIT_PROFILE_REJECTED", payload: err.response.data})

            })
    }
}

export function submitAddress(profileData, accountID = '') {
    return function (dispatch) {
        var header = {
            'SUBMISSION_TYPE': 'Address',
            'accountID': acc.idAccount
        };
        dispatch({type: "SUBMIT_PROFILE"}); //
        axios.post("http://localhost:10003/user/update-profile", profileData, {headers: header})
            .then((response) => {
                console.log("Updating profile successful " + response);
                dispatch({type: "SUBMIT_PROFILE_ACCEPTED", payload: response.data.entities})
            })
            .catch((err) => {
                console.log("Update file unsuccessful. Error: " + err);
            }).catch((err) => {
            dispatch({type: "SUBMIT_PROFILE_REJECTED", payload: err})
        })
    }
}

export function updateAddress(account) {
    return function(dispatch) {
        dispatch({type: UPDATE_PROFILE_ADDRESS});

        axios.post(URL_USER + "/user/update-address", account)
            .then((response) => {
                dispatch({type: UPDATE_PROFILE_ADDRESS_FULFILLED, payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: UPDATE_PROFILE_ADDRESS_REJECTED, payload: err})
            })
    }
}

export function resetErrorsAndStatus() {
    return function (dispatch) {
        dispatch({type: RESET_PROFILE_ERRORS})
    }
}
