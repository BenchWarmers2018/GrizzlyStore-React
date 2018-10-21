import {PROCESS_ORDER_UNSUCCESSFUL, PROCESSING_ORDER, PROCESSING_ORDER_SUCCESSFUL, RESET_ORDER} from "../CONSTANTS";

const initialState ={

    errors: null,
    processedOrder: null,
    processing: false,
    processed: false,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
        case PROCESSING_ORDER: {
            return {...state, processing: true}
        }
        case PROCESSING_ORDER_SUCCESSFUL: {
            return {
                ...state,
                processing:false,
                processed: true,
                processedOrder: action.payload}
        }
        case PROCESS_ORDER_UNSUCCESSFUL: {
            return {
                ...state,
                processing:false,
                processed: false,
                errors: action.payload
            }
        }
        case RESET_ORDER : {
            return{
                ...state,
                errors: null,
                processedOrder: null,
                processing: false,
                processed: false,
            }
        }
        default:
            return state;
    }
}