import {PROCESS_ORDER_UNSUCCESSFUL, PROCESSING_ORDER, PROCESSING_ORDER_SUCCESSFUL} from "../CONSTANTS";

const initialState ={
    errors: [],
    processedOrder: {},
    processing: false,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
        case PROCESSING_ORDER: {
            return {...state, processing: true}
        }
        case PROCESSING_ORDER_SUCCESSFUL: {
            return {...state, processedOrder: action.payload}
        }
        case PROCESS_ORDER_UNSUCCESSFUL: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default:
            return state;
    }
    return state
}