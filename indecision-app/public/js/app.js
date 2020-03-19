'use strict';

// arguments object - no longer bound with arrow function

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(20, 1));

var user = {
    name: 'Artiom',
    cities: ['Montreal', 'New York', 'Toronto'],
    // printPlace: function () { ES5
    printPlace: function printPlace() {
        var _this = this;

        // ES6
        console.log(this.name);
        console.log(this.cities);

        // this.cities.forEach( function (city) {
        // console.log(this.name + ' - ' + city);
        // });

        // Bind the value
        var that = this;
        // or with arrow function
        this.cities.forEach(function (city) {
            console.log(_this.name + ' - ' + city);
        });

        // forEach - do something with each element
        // map - transform each element and return an array

        // this.cities.forEach( (city) => {
        //     console.log(city);
        // });

        var cities = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cities;
    }
};
// const data = user.printPlace();

// Challenge
var multiplier = {
    numbers: [30, 20, 40],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
var data = multiplier.multiply();
console.log(data);
