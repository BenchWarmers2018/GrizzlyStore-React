import axios from 'axios';
import {
    FETCH_ITEMS,
    FETCH_ITEMS_PAGE_FULFILLED,
    FETCH_ITEMS_REJECTED,
    FETCH_ITEMS_FULFILLED,
    URL_ITEM,
    ADD_ITEM, ADD_ITEM_FULFILLED, ADD_ITEM_REJECTED,
    DELETE_ITEM, DELETE_ITEM_FULFILLED, DELETE_ITEM_REJECTED,
    FETCH_SINGLE_ITEM,
    FETCH_SINGLE_ITEM_FULFILLED,
    FETCH_SINGLE_ITEM_REJECTED,
    FETCH_ITEMS_PAGE,
    FETCH_ITEMS_PAGE_REJECTED,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESSFUL,
    UPDATE_ITEM_REJECTED,
    SERVER_NOT_FOUND,
    FETCH_HOME_ITEMS,
    FETCH_HOME_ITEMS_FULFILLED,
    FETCH_HOME_ITEMS_REJECTED,
    FETCH_SINGLE_CART_ITEM,
    FETCH_SINGLE_CART_ITEM_FULFILLED, FETCH_SINGLE_CART_ITEM_REJECTED
} from "../CONSTANTS";

export function fetchItems() {
    return function (dispatch) {
        dispatch({type: FETCH_ITEMS});

        axios.get(URL_ITEM + "/items/all")
            .then((response) => {
                dispatch({type: "FETCH_ITEMS_FULFILLED", payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
            })
    }
}

export function fetchSingleItem(id) {
    return function (dispatch) {
        dispatch({type: FETCH_SINGLE_ITEM});

        axios.get(URL_ITEM + "/items/id?itemId=" + id)
            .then((response) => {
                dispatch({type: FETCH_SINGLE_ITEM_FULFILLED, payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: FETCH_SINGLE_ITEM_REJECTED, payload: err})
            })
    }
}


export function fetchHomeItemsPage(page, size) {
    return function (dispatch) {
        dispatch({type: FETCH_HOME_ITEMS});
        page = page - 1;
        axios.get(URL_ITEM + "/items/page?page=" + page + "&size=" + size)
            .then((response) => {
                dispatch({type: FETCH_HOME_ITEMS_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_HOME_ITEMS_REJECTED, payload: err})
            })
    }
}

export function fetchCategoryItems(catName, page, size) {
    return function (dispatch) {

        dispatch({type: FETCH_ITEMS_PAGE});

        axios.get(URL_ITEM + "/items/page/categoryName?name=" + catName + "&size=" + size + "&page=" + page)
            .then((response) => {
                dispatch({type: FETCH_ITEMS_PAGE_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_ITEMS_PAGE_REJECTED, payload: err})
            })
    }
}

const popularArr = [
    {
        "idItem": 15,
        "category": {
            "idCategory": 1,
            "categoryName": "Art",
            "categoryDescription": "Show someone that you can't bear to be without them with one of our lovely bear themed jewellery pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Abstract Polar Bear Painting Canvas",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iA09.jpg",
        "itemPrice": 29.99,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 145,
        "category": {
            "idCategory": 3,
            "categoryName": "Home",
            "categoryDescription": "Show someone that you can't bear to be without them with one of our lovely bear themed jewellery pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Cheerful Toilet Paper Bear Holder",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iH26.jpg",
        "itemPrice": 30.99,
        "itemSalePercentage": 25,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 162,
        "category": {
            "idCategory": 4,
            "categoryName": "Jewellery",
            "categoryDescription": "Fur all those with bearly any artistic talent, we have your back!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Gold or Silver Star Silhouette Charm",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iJ13.jpg",
        "itemPrice": 29.99,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 167,
        "category": {
            "idCategory": 4,
            "categoryName": "Jewellery",
            "categoryDescription": "Fur all those with bearly any artistic talent, we have your back!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Origami Styled Bear Charm",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iJ18.jpg",
        "itemPrice": 29,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 89,
        "category": {
            "idCategory": 2,
            "categoryName": "Clothing",
            "categoryDescription": "Never get caught bearly  dressed with one of our adorable bear pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Bear Knitted Beanie",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iC40.jpeg",
        "itemPrice": 32.95,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 121,
        "category": {
            "idCategory": 3,
            "categoryName": "Homing",
            "categoryDescription": "Never get caught bearly  dressed with one of our adorable bear pieces!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Drunk Bears 3 Bottle Wine Holder",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iH02.jpg",
        "itemPrice": 49.99,
        "itemSalePercentage": 25,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 214,
        "category": {
            "idCategory": 5,
            "categoryName": "Home",
            "categoryDescription": "Have a bearly decorated house? Never fear! We are here!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Kawaii Brown Bear Laptop Case 15inches",
        "itemDescription": "Cutest teddy bear in the Artic",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iT24.jpg",
        "itemPrice": 24.99,
        "itemSalePercentage": 10,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
    {
        "idItem": 10,
        "category": {
            "idCategory": 1,
            "categoryName": "Art",
            "categoryDescription": "Have a bearly decorated house? Never fear! We are here!",
            "last_modified": "2018-09-20T13:09:49.000+0000"
        },
        "itemName": "Beautiful Bear Silhouette Tree Landscape Painting",
        "itemDescription": "Cutest teddy bear in Pluto",
        "itemImage": "http://bw.ausgrads.academy/images/grizzlystore/iA04.jpg",
        "itemPrice": 95.95,
        "itemSalePercentage": 0,
        "lastModified": "2018-09-20T13:09:49.000+0000"
    },
]


export function fetchPopularItems() {
    return {
        payload: popularArr
    }
}


export function addItem(itemName, itemDescription, itemImage, itemPrice, itemStock, itemSales, itemCategory) {
    return function (dispatch) {
        let data = new FormData();
        let header = {
            'Content-Type': 'multipart/form-data'
        };
        let item = {
            itemName: itemName,
            itemPrice: itemPrice,
            itemStockLevel: itemStock,
            itemSalePercentage: itemSales,
            itemDescription: itemDescription
        };
        data.append('file', itemImage);
        data.append('item', JSON.stringify(item));
        data.append('category', itemCategory);

        dispatch({type: ADD_ITEM}); //
        axios.post(URL_ITEM + "/items/addItem", data, {headers: header}).then((response) => {
            console.log("TESTING " + response.data.entities);
            dispatch({type: ADD_ITEM_FULFILLED, payload: response.data})
        })
            .catch((err) => {
                dispatch({type: ADD_ITEM_REJECTED, payload: err})
            })
    }
}

export function updateItem(formData) {
    return function (dispatch) {
        dispatch({type: UPDATE_ITEM});

        axios.post(URL_ITEM + "/items/edit", formData)
            .then(result => {
                dispatch({type: UPDATE_ITEM_SUCCESSFUL, payload: result.data.entities[0]})
            })
            .catch((error) => {
                if (error.message === "Network Error")
                    dispatch({
                        type: SERVER_NOT_FOUND,
                        payload: 'The server is currently offline. Please try again later.'
                    })
                else
                    dispatch({type: UPDATE_ITEM_REJECTED, payload: error.response.data.errors})
            })
    }
}

export function deleteItem(item) {
    return function (dispatch) {
        dispatch({type: DELETE_ITEM}); //
        axios.post(URL_ITEM + "/items/remove", item)
            .then((response) => {
                dispatch({type: DELETE_ITEM_FULFILLED, payload: response.data.entities[0]})
            })
            .catch((err) => {
                if (err.message === "Network Error" )
                    dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'})
                else
                    dispatch({type: DELETE_ITEM_REJECTED, payload: err.response.data.errors})
            })
    }
}