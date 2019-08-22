/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - When 'this' has no object to reference, its value will that of the Window/Global object. Every object in JavaScript inherits from this object.

* 2. Implicit Binding - When it comes to objects that contain methods (object functions), this will refer to that object and not the Window/Global.

* 3. New binding - This uses a constructor. A function that holds an object and takes unique information in its parameters to create unique objects. Creating an instance of an object using new binding goes as follows:
const instance = new Construct(uniqueInfo); --> uniqueInfo will fill the fields in the Construct function's object. instance.property will hold information pertaining to this instance and not anothers. 

* 4. Explicit binding - Using the .apply() and .call() on a method will now reference the object inside the apply/call() parameter.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function someFunc(){
    console.log(this)//inside a function, but not an object
}
//someFunc()//will print window binding stack


// Principle 2

// code example for Implicit Binding
const dominos ={
    food:'pizza',
    size:'L',
    topping:['pineapple','ham','bacon'],
    order: function(){ return `One order of a ${this.food} size ${this.size} with ${this.topping.join(' ')} coming up! `}
}
console.log(dominos.order())
// Principle 3

// code example for New Binding
function Order(size, toppings, quantity){
    this.size = size.toUpperCase(),
    this.topping = toppings,
    this.quantity = quantity,
    this.readOrder = function(){
       return  `${this.quantity} order(s) of a ${this.size} ${this.topping.join(', ')} pizza, coming up! `
    }
}

const order1 = new Order('xl',['pepperoni','jalapeno','anchovies'], 3)
const order2 = new Order('l',['pepperoni'], 2)
const order3 = new Order('s',['mushroom','bellpepper','olives'], 1)
console.log(order1.readOrder())
console.log(order2.readOrder())
console.log(order3.readOrder())

// Principle 4

// code example for Explicit Binding

console.log(order1.readOrder.call(order2))//--> will print out order2 properties as its inside the call function
console.log(order1.readOrder.apply(order2))