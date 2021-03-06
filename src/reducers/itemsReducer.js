import {
    FETCH_ITEMS,
    FETCH_ITEMS_PAGE_FULFILLED,
    ADD_ITEM,
    ADD_ITEM_FULFILLED,
    ADD_ITEM_REJECTED,
    FETCH_ITEMS_REJECTED,
    FETCH_ITEMS_FULFILLED,
    FETCH_ITEMS_PAGE_REJECTED,
    FETCH_SINGLE_ITEM,
    FETCH_SINGLE_ITEM_REJECTED,
    FETCH_ITEMS_PAGE,
    FETCH_SINGLE_ITEM_FULFILLED,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESSFUL,
    UPDATE_ITEM_REJECTED,
    DELETE_ITEM_REJECTED, DELETE_ITEM_FULFILLED, DELETE_ITEM,
    SERVER_NOT_FOUND,
    FETCH_HOME_ITEMS,
    FETCH_HOME_ITEMS_REJECTED,
    FETCH_HOME_ITEMS_FULFILLED,
    // FETCH_SINGLE_CART_ITEM,
    // FETCH_SINGLE_CART_ITEM_REJECTED, FETCH_SINGLE_CART_ITEM_FULFILLED

} from "../CONSTANTS";

const initialState = {
    items: [],
    addedItem: [],
    addedItems: [],
    updates: "",
    homePageItems: [],
    singleItem: [],
    pagedItems: [],
    pageProps: {
        last: false,
        totalPages: undefined,
        totalElements: undefined,
        size: undefined,
        number: undefined,
        numberOfElements: undefined,
        first: false,
    },
    adding: false,
    added: false,
    leastItemPrice: undefined,
    mostItemPrice: undefined,
    fetching: false,
    fetched: false,
    error: null,
    removing: false,
    removed: false,
    updating: false,
    updated: false,
    updateItemMessages: [],
    messages: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        //Fetch items cases
        case FETCH_ITEMS: {
            return {...state, fetching: true}
        }
        case FETCH_ITEMS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_ITEMS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                items: action.payload,
            }
        //Fetching items for home page.
        case FETCH_HOME_ITEMS: {
            return {...state, fetching: true}
        }
        case FETCH_HOME_ITEMS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_HOME_ITEMS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                homePageItems: action.payload.content,
            }

        //Fetch single item cases.
        case FETCH_SINGLE_ITEM:
            return {...state, fetching: true}

        case FETCH_SINGLE_ITEM_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_SINGLE_ITEM_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                singleItem: action.payload,
            }
        }



        case FETCH_ITEMS_PAGE: {
            return {...state, fetching: true}
        }
        case FETCH_ITEMS_PAGE_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_ITEMS_PAGE_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                pagedItems: action.payload.content,
                pageProps: {
                    last: action.payload.last,
                    totalPages: action.payload.totalPages,
                    totalElements: action.payload.totalElements,
                    size: action.payload.size,
                    number: action.payload.number + 1,
                    numberOfElements: action.payload.numberOfElements,
                    first: action.payload.first,
                },
                leastItemPrice: action.payload.size,
                mostItemPrice: action.payload.numberOfElements,
            }
        }


        case ADD_ITEM: {
            return {
                ...state,
                adding: true
            }
        }

        case ADD_ITEM_FULFILLED: {
            return {
                ...state,
                updates: "Item successfully added",
                addedItems: [...state.items, action.payload[0]],
                added: true,
                adding: false,
                error: null,
                addedItem: action.payload
            }
        }

        case ADD_ITEM_REJECTED: {
            return {
                ...state,
                updates: "Unable to add item!",
                added: false,
                adding: false,
                error: action.payload
            }
        }
        case (UPDATE_ITEM):
            return {...state, updating: true}
        case (UPDATE_ITEM_REJECTED):
            return {...state, updated: false, updating: false, updateItemMessages: action.payload}
        case (UPDATE_ITEM_SUCCESSFUL): {
            const
            {
                idItem, itemName, itemDescription, itemImage, itemPrice, itemSalePercentage, last_modified
            }
            = action.payload;
            const newItems = [...state.items];
            const itemToUpdate = newItems.findIndex(item => item.idItem === idItem);
            newItems[itemToUpdate] = action.payload;

            return {
                ...state,
                items: newItems,
                updating: false,
                updated: true,
                updateItemMessages: "Item updated successfully!",
            }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                removing: true,
                removed: false,
            }
        }
        case DELETE_ITEM_FULFILLED: {
            const { idItem } = action.payload
            const newItems = [...state.items]
            const itemToDelete = newItems.findIndex(item => item.idItem === idItem)
            newItems.splice(itemToDelete, 1)

            return {
                ...state,
                items: newItems,
                removed: true,
                removing: false,
                deletedItem: action.payload,
                updates: "Item " + action.payload.idItem.toString() + " successfully removed!"
            }
        }
        case DELETE_ITEM_REJECTED: {
            return {
                ...state,
                removing: false,
                removed: false,
                error: action.payload.response.data.errors,
                updates: "Unable to remove item!"
            }
        }
        case (SERVER_NOT_FOUND):
            return {...state, messages: action.payload};
        default:
            return state;
    }
}
