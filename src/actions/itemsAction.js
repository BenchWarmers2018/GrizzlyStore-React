import axios from 'axios';

// export function fetchItems() {
//     return function(dispatch) {
//         dispatch({type: "FETCH_ITEMS"});
//
//         /*
//           http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
//           If you get console errors due to bad data:
//           - change "reacttest" below to any other username
//           - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
//         */
//         axios.get("http://localhost:8080/items/all")
//             .then((response) => {
//                 dispatch({type: "FETCH_ITEMS_FULFILLED", payload: response.data})
//             })
//             .catch((err) => {
//                 dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
//             })
//     }
// }

const arr = [
    {
        "idItem": 2,
        "itemName": "Teddy1",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 3,
        "itemName": "Teddy2",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 4,
        "itemName": "Teddy3",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 5,
        "itemName": "Teddy4",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 20,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 6,
        "itemName": "Teddy5",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 7,
        "itemName": "Teddy6",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 13,
        "itemName": "Teddy1",
        "itemDescription": "Cutest teddy bear in the world",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 14,
        "itemName": "Teddy2",
        "itemDescription": "Cutest teddy bear in Asia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 5,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 15,
        "itemName": "Teddy3",
        "itemDescription": "Cutest teddy bear in Europe",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 16,
        "itemName": "Teddy4",
        "itemDescription": "Cutest teddy bear in Australia",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 10,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 17,
        "itemName": "Teddy5",
        "itemDescription": "Cutest teddy bear in America",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 18,
        "itemName": "Teddy6",
        "itemDescription": "Cutest teddy bear in Antartica",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 19,
        "itemName": "Teddy7",
        "itemDescription": "Cutest teddy bear in the Artic",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 20,
        "itemName": "Teddy8",
        "itemDescription": "Cutest teddy bear in Pluto",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 21,
        "itemName": "Teddy9",
        "itemDescription": "Cutest teddy bear in Saturn",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 22,
        "itemName": "Teddy10",
        "itemDescription": "Cutest teddy bear in Venus",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 23,
        "itemName": "Teddy11",
        "itemDescription": "Cutest teddy bear in Mars",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    },
    {
        "idItem": 24,
        "itemName": "Teddy12",
        "itemDescription": "Cutest teddy bear in Mercury",
        "itemImage": "<INSERT URL HERE>",
        "itemPrice": 10,
        "itemSalePercentage": 0,
        "last_modified": "2018-09-14T04:08:15.000+0000"
    }
]

export function fetchItems() {
    return {
        type: "FETCH_ITEMS_FULFILLED",
        payload:arr
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
