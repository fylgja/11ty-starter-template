/**
 * Check if the given `value` is a array.
 *
 * @param {any} value
 * @return {boolean} true if the value is a array
 */
const isArray = (value) => {
    return typeof value === "array";
};

/**
 * Check if the given `value` is a boolean.
 *
 * @param {any} value
 * @return {boolean} true if the value is a boolean
 */
const isBoolean = (value) => {
    return typeof value === "boolean";
};

/**
 * Check if the given `value` is a number.
 *
 * @param {any} value
 * @return {boolean} true if the value is a number
 */
const isNumber = (value) => {
    return typeof value === "number";
};

/**
 * Check if the given `value` is a object.
 *
 * @param {any} value
 * @return {boolean} true if the value is a object
 */
const isObject = (value) => {
    return typeof value === "object";
};

/**
 * Check if the given `value` is a string.
 *
 * @param {any} value
 * @return {boolean} true if the value is a string
 */
const isString = (value) => {
    return typeof value === "string";
};

module.exports = { isArray, isBoolean, isNumber, isObject, isString };
