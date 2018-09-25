
export const filterText = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

export const category = (chosenCategory) => ({
    type: 'CATEGORY',
    chosenCategory,
});

export const minPrice = (minimumPrice) => ({
    type: 'MIN_PRICE',
    minimumPrice,
});

export const maxPrice = (maximumPrice) => ({
    type: 'MAX_PRICE',
    maximumPrice,
});

export const sortBy = (sortType) => ({
    type: 'SORT_BY',
    sortType,
});

export const clear = () => ({
    type: 'CLEAR',
    defaultFilter: filterInitialState,
});

const filterInitialState = {
    text:'',
    chosenCategory: '',
    sortType: '',
    minPrice: undefined,
    maxPrice: undefined,
};