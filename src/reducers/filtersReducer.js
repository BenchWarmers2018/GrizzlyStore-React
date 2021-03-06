import { getVisibleItems } from "../selectors/itemsSelector";

const filterInitialState = {
    text:'',
    category: '',
    sortBy: '',
    minPrice: 0,
    maxPrice: 0,
    page: 1,
};

export default (state = filterInitialState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return{
                ...state,
                text: action.text,
            }
        case 'CATEGORY':
            return{
                ...state,
                category: action.chosenCategory,
            }
        case 'MIN_PRICE':
            return {
                ...state,
                minPrice: action.minimumPrice,
            };
        case 'MAX_PRICE':
            return {
                ...state,
                maxPrice: action.maximumPrice,
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType,
            };
        case 'PAGE':
            return{
                ...state,
                page: action.pageNumber,
            }
        case 'CLEAR':
            return {
                ...state,
                text: action.defaultFilter.text,
                category: action.defaultFilter.category,
                sortBy: action.defaultFilter.sortBy,
                minPrice: action.defaultFilter.minPrice,
                maxPrice: action.defaultFilter.maxPrice,
            };
        default:
            return state;
    }
}
