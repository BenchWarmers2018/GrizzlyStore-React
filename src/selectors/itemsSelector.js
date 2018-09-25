export const getVisibleItems = (items, { text, category, minPrice, maxPrice, sortBy }) => {
    return items.filter(item => {
        const textMatch =
            item.itemName.toLowerCase().includes(text.toLowerCase()) ||
            item.itemDescription.toLowerCase().includes(text.toLowerCase());

        const minPriceMatch = typeof minPrice !== 'number' || minPrice <= item.itemPrice;
        const maxPriceMatch = typeof maxPrice !== 'number' || item.itemPrice <= maxPrice;

        const categoryMatch = (item.category.categoryName.toLowerCase()===category) || (category==="");

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