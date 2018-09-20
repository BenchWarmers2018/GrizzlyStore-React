import axios from 'axios';

export function fetchItems() {
    return function(dispatch) {
        dispatch({type: "FETCH_ITEMS"});

        axios.get("http://localhost:8080/items/all")
            .then((response) => {
                dispatch({type: "FETCH_ITEMS_FULFILLED", payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
            })
    }
}



const arr = [
    {
        "idItem": 2,
        "itemName": "Teddy",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 3,
        "itemName": "ATeddy",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 4,
        "itemName": "CTeddy",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 20,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 5,
        "itemName": "FTeddy",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 20,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 6,
        "itemName": "Zeddy",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 7,
        "itemName": "STeddy",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 12,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 13,
        "itemName": "ETeddy",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 14,
        "itemName": "STeddy",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 5,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 15,
        "itemName": "HTeddy",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 1,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 16,
        "itemName": "LTeddy",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 25,
        "itemSalePercentage": 10,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 17,
        "itemName": "LTeddy",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 18,
        "itemName": "VTeddy",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 50,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 19,
        "itemName": "NTeddy",
        "itemDescription": "Cutest teddy bear in the Artic",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 19,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 20,
        "itemName": "NTeddy",
        "itemDescription": "Cutest teddy bear in Pluto",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 28,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 21,
        "itemName": "Teddy",
        "itemDescription": "Cutest teddy bear in Saturn",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 90,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 22,
        "itemName": "MTeddy",
        "itemDescription": "Cutest teddy bear in Venus",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 11,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 23,
        "itemName": "XTeddy",
        "itemDescription": "Cutest teddy bear in Mars",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 11,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 24,
        "itemName": "RTeddy",
        "itemDescription": "Cutest teddy bear in Mercury",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 67,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    }
]

// export function fetchItems() {
//     return {
//         type: "FETCH_ITEMS_FULFILLED",
//         payload:arr
//     }
// }



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
