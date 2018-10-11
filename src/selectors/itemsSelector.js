import {FETCH_ITEMS, FETCH_ITEMS_PAGE_FULFILLED, FETCH_ITEMS_REJECTED, FETCH_ITEMS_PAGE_REJECTED, URL_ITEM} from "../CONSTANTS";
import axios from "axios";



export function fetchFilteredItems(text, minPrice, maxPrice, sortBy, catName, page, size) {
    return function (dispatch) {

        page = page - 1;
        if(sortBy.length <=0)
        {
            sortBy = "title";
        }
        dispatch({type: FETCH_ITEMS});

            console.log(URL_ITEM+"/items/page/filtered?text="+text+"&minPrice="+minPrice+"&maxPrice="+maxPrice+"&sortBy="+sortBy+"&name="+catName+"&size="+size+"&page="+page)

            axios.get(URL_ITEM+"/items/page/filtered?text="+text+"&minPrice="+minPrice+"&maxPrice="+maxPrice+"&sortBy="+sortBy+"&name="+catName+"&size="+size+"&page="+page)
                .then((response)=> {
                    dispatch({type: FETCH_ITEMS_PAGE_FULFILLED, payload: response.data});
                })
                .catch((err)=> {
                    dispatch({type: FETCH_ITEMS_PAGE_REJECTED, payload: err})
                })

    }
}

//This functions is not in use for now.
export const getVisibleItems = (items, { text, category, minPrice, maxPrice, sortBy }) => {
    return items.filter(item => {
        const textMatch =
            item.itemName.toLowerCase().includes(text.toLowerCase()) ||
            item.itemDescription.toLowerCase().includes(text.toLowerCase());

        const minPriceMatch = typeof minPrice !== 'number' || minPrice <= item.itemPrice;
        const maxPriceMatch = typeof maxPrice !== 'number' || item.itemPrice <= maxPrice;
        const categoryMatch = true;
        //categoryMatch = (item.category.categoryName.toLowerCase()===category) || (category==="");

        return textMatch && minPriceMatch && maxPriceMatch && categoryMatch;
    }).sort((item1, item2) => {
        if (sortBy === 'title') {
            return item1.itemName.localeCompare(item2.itemName);
        } else if (sortBy === 'lowtohigh') {
            return item1.itemPrice < item2.itemPrice ? -1 : 1;
        }
        else if( sortBy === 'hightolow') {
            return item1.itemPrice > item2.itemPrice ? -1 : 1;
        }
    });
}



{/* End of sorting and filtering */}