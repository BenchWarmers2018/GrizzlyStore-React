// URL_ITEM's for local machine. Please comment before pushing to git.
// export const URL_USER = "http://localhost:10003";
// export const URL_ORDER = "http://localhost:10004";
// export const URL_ITEM = "http://localhost:10005";
// export const URL_GOOGLE_USER = "http://localhost:10006";

// /***URL_ITEM's for the server. Please uncomment before pushing to git ***/

export const URL_USER = "http://bw.ausgrads.academy:8765/grizzlystore-user_service";
export const URL_ORDER = "http://bw.ausgrads.academy:8765/grizzlystore-order_service";
export const URL_ITEM = "http://bw.ausgrads.academy:8765/grizzlystore-item_service";
export const URL_GOOGLE_USER = "http://bw.ausgrads.academy:8765/grizzlystore-googleuser_service";

export const FETCH_CATEGORIES_FULFILLED = "FETCH_CATEGORIES_FULFILLED";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_REJECTED = "FETCH_CATEGORIES_REJECTED";
export const FETCH_CATEGORY_ITEMS_FULFILLED = "FETCH_CATEGORY_ITEMS_FULFILLED";
export const FETCH_CATEGORY_ITEMS = "FETCH_CATEGORY_ITEMS";
export const FETCH_CATEGORY_ITEMS_REJECTED = "FETCH_CATEGORY_ITEMS_REJECTED";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_FULFILLED = "FETCH_ITEMS_FULFILLED";
export const FETCH_ITEMS_REJECTED = "FETCH_ITEMS_REJECTED";

export const FETCH_HOME_ITEMS = "FETCH_HOME_ITEMS";
export const FETCH_HOME_ITEMS_FULFILLED = "FETCH_HOME_ITEMS_FULFILLED";
export const FETCH_HOME_ITEMS_REJECTED = "FETCH_HOME_ITEMS_REJECTED";

export const FETCH_ITEMS_PAGE = "FETCH_ITEMS_PAGE";
export const FETCH_ITEMS_PAGE_FULFILLED = "FETCH_ITEMS_PAGE_FULFILLED";
export const FETCH_ITEMS_PAGE_REJECTED = "FETCH_ITEMS_PAGE_REJECTED";

export const FETCH_SINGLE_ITEM = "FETCH_SINGLE_ITEM";
export const FETCH_SINGLE_ITEM_FULFILLED = "FETCH_SINGLE_ITEM_FULFILLED";
export const FETCH_SINGLE_ITEM_REJECTED = "FETCH_SINGLE_ITEM_REJECTED";

export const FETCH_SINGLE_CART_ITEM = "FETCH_SINGLE_CART_ITEM";
export const FETCH_SINGLE_CART_ITEM_FULFILLED = "FETCH_SINGLE_CART_ITEM_FULFILLED";
export const FETCH_SINGLE_CART_ITEM_REJECTED = "FETCH_SINGLE_CART_ITEM_REJECTED";
export const REMOVE_FETCHED_ITEMS_FOR_CART = "REMOVE_FETCHED_ITEMS_FOR_CART";

export const FETCH_ITEM_CATEGORY = "FETCH_ITEM_CATEGORY";
export const FETCH_ITEM_CATEGORY_FULFILLED = "FETCH_ITEM_CATEGORY_FULFILLED";
export const FETCH_ITEM_CATEGORY_REJECTED = "FETCH_ITEM_CATEGORY_REJECTED";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_ITEM_REJECTED = "UPDATE_ITEM_REJECTED";
export const UPDATE_ITEM_SUCCESSFUL = "UPDATE_ITEM_SUCCESSFUL";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_CATEGORY_SUCCESSFUL = "ADD_CATEGORY_SUCCESSFUL";
export const ADD_CATEGORY_REJECTED = "ADD_CATEGORY_REJECTED";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const EDIT_CATEGORY_SUCCESSFUL = "EDIT_CATEGORY_SUCCESSFUL";
export const EDIT_CATEGORY_REJECTED = "EDIT_CATEGORY_REJECTED";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_REJECTED = "ADD_TO_CART_REJECTED";
export const ADD_TO_CART_FULFILLED = "ADD_TO_CART_FULFILLED";

export const FETCH_CART = "FETCH_CART";
export const FETCH_CART_REJECTED = "FETCH_CART_REJECTED";
export const FETCH_CART_FULFILLED = "FETCH_CART_FULFILLED";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_FULFILLED = "ADD_ITEM_FULFILLED";
export const ADD_ITEM_REJECTED = "ADD_ITEM_REJECTED";

export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_FULFILLED = "DELETE_ITEM_FULFILLED";
export const DELETE_ITEM_REJECTED = "DELETE_ITEM_REJECTED";

export const DELETE_ITEM_FROM_CART = "DELETE_ITEMS_FROM_CART";
export const DELETE_ITEM_FROM_CART_FULFILLED = "DELETE_ITEMS_FROM_CART_FULFILLED";
export const DELETE_ITEM_FROM_CART_REJECTED = "DELETE_ITEMS_FROM_CART_REJECTED";

export const DELETE_CART = "DELETE_CART";
export const DELETE_CART_FULFILLED = "DELETE_CART_FULFILLED";
export const DELETE_CART_REJECTED = "DELETE_CART_REJECTED";

export const FETCH_GOOGLE_ACCOUNTS = "FETCH_GOOGLE_ACCOUNTS";
export const FETCH_GOOGLE_ACCOUNTS_REJECTED = "FETCH_GOOGLE_ACCOUNTS_REJECTED";
export const FETCH_GOOGLE_ACCOUNTS_FULFILLED = "FETCH_GOOGLE_ACCOUNTS_FULFILLED";

export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_CURRENT_USER_REJECTED = "GET_CURRENT_USER_REJECTED";
export const GET_CURRENT_USER_FULFILLED = "GET_CURRENT_USER_FULFILLED";

export const FETCH_PROFILE = "FETCH_PROFILE";
export const FETCH_PROFILE_FULFILLED = "FETCH_PROFILE_FULFILLED";
export const FETCH_PROFILE_REJECTED = "FETCH_PROFILE_REJECTED";
export const FETCH_PROFILE_FULFILLED_AT_STARTUP = "FETCH_PROFILE_FULFILLED_AT_STARTUP";
export const FETCH_PROFILE_REJECTED_AT_STARTUP = "FETCH_PROFILE_REJECTED_AT_STARTUP";

export const UPDATE_PROFILE_ADDRESS = "UPDATE_PROFILE_ADDRESS";
export const UPDATE_PROFILE_ADDRESS_REJECTED = "UPDATE_PROFILE_ADDRESS_REJECTED";
export const UPDATE_PROFILE_ADDRESS_FULFILLED = "UPDATE_PROFILE_ADDRESS_FULFILLED";

export const UPDATE_PROFILE_PASSWORD = "UPDATE_PROFILE_PASSWORD";
export const UPDATE_PROFILE_PASSWORD_REJECTED = "UPDATE_PROFILE_PASSWORD_REJECTED";
export const UPDATE_PROFILE_PASSWORD_FULFILLED = "UPDATE_PROFILE_PASSWORD_FULFILLED";

export const UPDATE_PROFILE_DETAILS = "UPDATE_PROFILE_DETAILS";
export const UPDATE_PROFILE_DETAILS_REJECTED = "UPDATE_PROFILE_DETAILS_REJECTED";
export const UPDATE_PROFILE_DETAILS_FULFILLED = "UPDATE_PROFILE_DETAILS_FULFILLED";


export const RESET_PROFILE_ERRORS = "RESET_PROFILE_ERRORS";


export const PROCESSING_ORDER = "PROCESSING_ORDER";
export const PROCESSING_ORDER_SUCCESSFUL = "PROCESSING_ORDER_SUCCESSFUL";
export const PROCESS_ORDER_UNSUCCESSFUL = "PROCESS_ORDER_UNSUCCESSFUL";

export const RESET_USER_ACCOUNT = "RESET_USER_ACCOUNT";
export const RESET_USER_PROFILE = "RESET_USER_PROFILE";

export const RESET_ORDER = "RESET_ORDER";


export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_ACCOUNT_REJECTED = "CREATE_ACCOUNT_REJECTED";
export const CREATE_ACCOUNT_FULFILLED = "CREATE_ACCOUNT_FULFILLED";

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const AUTHENTICATE_USER_REJECTED = "AUTHENTICATE_USER_REJECTED";
export const AUTHENTICATING_USER_SUCCESSFUL = "AUTHENTICATING_USER_SUCCESSFUL";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_REJECTED = "GET_ALL_USERS_REJECTED";
export const GET_ALL_USERS_SUCCESSFUL = "GET_ALL_USERS_SUCCESSFUL";

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_CATEGORY_REJECTED = "DELETE_CATEGORY_REJECTED";
export const DELETE_CATEGORY_SUCCESSFUL = "DELETE_CATEGORY_SUCCESSFUL";

export const TOGGLE_USER_ADMIN = "TOGGLE_USER_ADMIN";
export const TOGGLE_USER_ADMIN_REJECTED = "TOGGLE_USER_ADMIN_REJECTED";
export const TOGGLE_USER_ADMIN_SUCCESSFUL = "TOGGLE_USER_ADMIN_SUCCESSFUL";

export const GOOGLE_API_KEY = "AIzaSyAKaUWK8FOWzydOIbeMrVDHdycqCqVmpuw";

export const SERVER_NOT_FOUND = "SERVER_NOT_FOUND";

export const GOOGLE_USER = "GOOGLE_USER";

export const NORMAL_USER = "NORMAL_USER";

export const ITEM_PAGE_SIZE = 12;
