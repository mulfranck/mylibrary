# Library

This project is to exercise on Objects and Object Constructors
and its uses

## Constructor
 if we have a list of items' detail to store each in as objects, then litarally typing one line of code after another is labourisous. A better solution is to use an objt Constructor function.

 This is just about another function that helps in creating multiple object but simplly calling it with the ```new``` keyword and passing in different argurments as needed.

### this is an object Constructor

```
function myObjtConstructor(itemsName, itemsDetail1) {
    this.itemsName = itemsName;
    this.itemsDetail1 = itemsDetaill1

    this.fctn = function() {
        console.log(itemsName)
    }
}
```

### This is the usage:
```
const item1 = new myObjtConstructor('Bag', 'red color');
const item2 = new myObjtConstructor('book', 'literature');
...
```
And all created items are themselves objects
```
    item1.fctn(); // logs 'Bag'
    item2.fctn(); // logs 'book'
```


## Prototype
Every Object has this hidden [[Prototype]] per specification
This ```[[Prototype]]``` is either another object or null
Prototype is a object pointed by the [[Prototype]].
This acts as a pipe that connect properties and methods of one object to another.


``` 
let users = {
   this.name : name,
   this.age : age,
   this.dob : dob
}

let admin = {
   this.owned : owned,
   this.password : password,
}

admin.__proto__ = users; //set users to be the prototype of admin

// or
//
// let admin = {
//     this.owned : owned,
//     this.password : password,
//     __proto__ : users,
// }
```
By this, ```admin.name``` is valid, as a ```admin.age``` and also ```admin.owned``` are all valid.
Therefore, the properties of the object ```admin``` are **inherited** from the object ```users```.


### __proto__ VS prototype
prototype is an internal property of all object, that points to the properties of that object
__proto__ is the getter//setter for the prototype of an object. 

### limits of Prototype
* The prototype methods are not enumerable i.e. it cann't be looped throung using a loop through the properties.
* When altering methods from an object inherited the method, then the imediate object is that which is affected not the parent object. or in another word; Methods always work with the current object even if inherited.
* when a method is prototype and the child object is again defining the same method then on calling the method its instead execute the defined and the parent method is not affected.



### For .. in
ES6 loop that iteral through the properties and methods  of an object, inherited or owned.
It can be used with the ```object.hasOwnProperty(attr)``` to list only owned or only inherited.
