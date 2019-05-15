/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.This is all about the where "this" will be called.It is defult to window object.
* 2. It will be call the object befor the dot.
* 3. Creat new object.
* 4. When we apply method to using this it will be Explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var sayname = function(){
    console.log(this);
};
 var me ={
     name:'Sam'
 };

// Principle 2

// code example for Implicit Binding
var sayNameMixine= function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};
var Joy={
    name:'Joy',
    age: 25
};
var you ={
    name: 'Sara',
    age: 21
};
sayNameMixine(Joy);
sayNameMixine(you);

Joy.sayName();
you.sayName();

// Principle 3

// code example for New Binding
var animal = function(color, name, type){
    this.color=color;
    this.name=name;
    this.type=type;
};
var zibra = new animal('black and white','Zorro','Zebra')

// Principle 4

// code example for Explicit Binding
var sayName = function(lang1, lang2, lang3){
    console.log('My name is' +this.name + ' and I know '+ lang1 + ', '+lang2 + ', and '+ lang3);
};
var Alex = {
    name: 'Alex',
};
var languages =['JavaScript', 'Rudy', 'Python'];
sayName.apply(Alex,languages);