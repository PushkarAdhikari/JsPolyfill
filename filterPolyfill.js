//Polyfill of filter function
Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const shouldKeep = callback(this[i], i, this);

        if (shouldKeep) {
            result.push(this[i]);
        }
    }
    return result;
};
const numbers = [1, 2, 3, 4];
const evens = numbers.myFilter((n) => n % 2 === 0);