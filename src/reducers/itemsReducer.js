const initialState = {
    items: [],
    fetching: false,
    fetched: false,
    error: null,
}


export default function reducer(state=initialState, action) {

    switch (action.type) {
        case "FETCH_ITEMS": {
            return {...state, fetching: true}
        }
        case "FETCH_ITEMS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_ITEMS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                items: action.payload,
            }
        }
        case "ADD_ITEM": {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
        case "UPDATE_ITEM": {
            const { idItem, itemName, itemDescription, itemImage, itemPrice, itemSalePercentage, last_modified } = action.payload
            const newItems = [...state.items]
            const itemToUpdate = newItems.findIndex(item => item.idItem === idItem)
            newItems[itemToUpdate] = action.payload;

            return {
                ...state,
                items: newItems,
            }
        }
        case "DELETE_ITEM": {
            return {
                ...state,
                items: state.items.filter(item => item.idItem !== action.payload),
            }
        }
        default:
            return state;
    }

    return state
}
