//Polyfill of map function
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const newValue = callback(element, i, this);
        result.push(newValue);
    }
    return result;
}
const nums = [1, 2, 3];
const doubled = nums.myMap((n) => n * 2);
