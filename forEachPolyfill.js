//Polyfill of forEach function
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        callback(element, i, this);
    }
};

const names = ['Pushkar', 'Mohit', 'Hitesh'];
names.myForEach((name) => console.log("Hello " + name));
