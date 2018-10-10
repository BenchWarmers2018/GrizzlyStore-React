import axios from 'axios';
import {
    FETCH_ITEMS,
    FETCH_ITEMS_PAGE_FULFILLED,
    FETCH_ITEMS_REJECTED,
    FETCH_ITEMS_FULFILLED,
    URL_ITEM,
    FETCH_SINGLE_ITEM,
    FETCH_SINGLE_ITEM_FULFILLED,
    FETCH_SINGLE_ITEM_REJECTED,
    FETCH_ITEMS_PAGE, FETCH_ITEMS_PAGE_REJECTED
} from "../CONSTANTS";

// export function fetchItems() {
//     return function(dispatch) {
//         dispatch({type: "FETCH_ITEMS"});
//
//         axios.get("http://localhost:8080/items/all")
//             .then((response) => {
//                 dispatch({type: "FETCH_ITEMS_FULFILLED", payload: response.data.entities})
//             })
//             .catch((err) => {
//                 dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
//             })
//     }
// }

export function fetchSingleItem(id) {
    return function(dispatch) {
        dispatch({type: FETCH_SINGLE_ITEM});

        axios.get(URL_ITEM + "/items/id?itemId="+ id)
            .then((response) => {
                console.log(response.data);
                dispatch({type: FETCH_SINGLE_ITEM_FULFILLED, payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: FETCH_SINGLE_ITEM_REJECTED, payload: err})
            })
    }
}

export function fetchItemsPage(page, size) {
    return function(dispatch) {
        dispatch({type: FETCH_ITEMS_PAGE});

        page = page -1;
        axios.get("http://localhost:8080/items/page?page="+ page + "&size=" + size)
            .then((response) => {
                dispatch({type: FETCH_ITEMS_PAGE_FULFILLED, payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: FETCH_ITEMS_PAGE_REJECTED, payload: err})
            })
    }
}

export function fetchCategoryItems(catName, page, size) {
    return function (dispatch) {

        dispatch({type: FETCH_ITEMS_PAGE});

        axios.get(URL_ITEM+"/items/page/categoryName?name="+catName+"&size="+size+"&page="+page)
            .then((response)=> {
                dispatch({type: FETCH_ITEMS_PAGE_FULFILLED, payload: response.data});
            })
            .catch((err)=> {
                dispatch({type: FETCH_ITEMS_PAGE_REJECTED, payload: err})
            })
    }
}

const tempArr = [
    {
        "idItem": 7,
        "category": {
            "idCategory": 1,
            "categoryName": "Jewellery",
            "categoryDescription": "Show someone that you can't bear to be without them with one of our lovely bear themed jewellery pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Weddy",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 12,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 8,
        "category": {
            "idCategory": 1,
            "categoryName": "Jewellery",
            "categoryDescription": "Show someone that you can't bear to be without them with one of our lovely bear themed jewellery pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Reddy2",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 14,
        "itemSalePercentage": 25,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 9,
        "category": {
            "idCategory": 2,
            "categoryName": "Art",
            "categoryDescription": "Fur all those with bearly any artistic talent, we have your back!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Teddy3",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 16,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 10,
        "category": {
            "idCategory": 2,
            "categoryName": "Art",
            "categoryDescription": "Fur all those with bearly any artistic talent, we have your back!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Ueddy4",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 18,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 11,
        "category": {
            "idCategory": 3,
            "categoryName": "Clothing",
            "categoryDescription": "Never get caught bearly  dressed with one of our adorable bear pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Oeddy5",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 11,
        "itemSalePercentage": 30,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 12,
        "category": {
            "idCategory": 3,
            "categoryName": "Clothing",
            "categoryDescription": "Never get caught bearly  dressed with one of our adorable bear pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Peddy6",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 13,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 13,
        "category": {
            "idCategory": 4,
            "categoryName": "Home",
            "categoryDescription": "Have a bearly decorated house? Never fear! We are here!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Veddy7",
        "itemDescription": "Cutest teddy bear in the Artic",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 19,
        "itemSalePercentage": 20,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 14,
        "category": {
            "idCategory": 4,
            "categoryName": "Home",
            "categoryDescription": "Have a bearly decorated house? Never fear! We are here!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Beddy8",
        "itemDescription": "Cutest teddy bear in Pluto",
        "itemImage": "<INSERT URL_ITEM HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
]


export function fetchItems() {
    return {
        type: FETCH_ITEMS_FULFILLED,
        payload:tempArr
    }
}



export function addItem(idItem, itemName, itemDescription, itemImage, itemPrice, itemSalePercentage, last_modified) {
    return {
        type: 'ADD_ITEM',
        payload: {
            idItem,
            itemName,
            itemDescription,
            itemImage,
            itemPrice,
            itemSalePercentage,
            last_modified
        },
    }
}

export function updateItem(idItem, itemName, itemDescription, itemImage, itemPrice, itemSalePercentage, last_modified) {
    return {
        type: 'UPDATE_ITEM',
        payload: {
            idItem,
            itemName,
            itemDescription,
            itemImage,
            itemPrice,
            itemSalePercentage,
            last_modified
        },
    }
}

export function deleteItem(idItem) {
    return { type: 'DELETE_ITEM', payload: idItem}
}
