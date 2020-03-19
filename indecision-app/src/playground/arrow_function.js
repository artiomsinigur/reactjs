// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(20, 1));

const user = {
    name: 'Artiom',
    cities: ['Montreal', 'New York', 'Toronto'],
    // printPlace: function () { ES5
    printPlace() { // ES6
        console.log(this.name);
        console.log(this.cities);

        // this.cities.forEach( function (city) {
            // console.log(this.name + ' - ' + city);
        // });
        
        // Bind the value
        const that = this;
        // or with arrow function
        this.cities.forEach( (city) => {
            console.log(this.name + ' - ' + city);
        });


        // forEach - do something with each element
        // map - transform each element and return an array
        
        // this.cities.forEach( (city) => {
        //     console.log(city);
        // });

        const cities = this.cities.map( (city) => {
            return this.name + ' has lived in ' + city;
        });
        return cities;
    }
}
// const data = user.printPlace();

// Challenge
const multiplier = {
    numbers: [30, 20, 40],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy)}
} 
const data = multiplier.multiply();
console.log(data);
