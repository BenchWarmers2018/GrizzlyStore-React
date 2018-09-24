
export function fetchAccount() {
    return function(dispatch) {
        dispatch({type: "FETCH_ACCOUNT"});
        axios.get("http://localhost:8080/user/account?email=avi@gmail.com")
            .then((response) => {
                dispatch({type: "FETCH_ACCOUNT_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_ACCOUNT_REJECTED", payload: err})
            })
    }
}
