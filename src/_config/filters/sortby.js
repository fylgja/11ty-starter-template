/**
 * Sort a collection by it name
 *
 * @param {Object} collection
 * @return {Object} New collection sorted by name
 */
const sortByName = (collection) => {
    let item = [...collection];
    return item.sort((a, b) => a.data.title.localeCompare(b.data.title));
};

/**
 * Sort a collection by the order.
 * This requires that the collection item has an template literal order key.
 *
 * @param {Object} collection
 * @return {Object} New collection sorted by order
 */
const sortByOrder = (collection) => {
    let item = [...collection];
    return item.sort((a, b) => Math.sign(a.data.order - b.data.order));
};

module.exports = { sortByName, sortByOrder };
