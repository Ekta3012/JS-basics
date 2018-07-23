/* 
const object ={
    a:1,
    b:4,
    c:8
};

const object1 = Object.assign({a:2,d:5},object);        //used to copy values from source to target objects
console.log(object1); 
*/

/* 
const person ={
    isHuman : false,
    print : function(){
        console.log("hi, everyone my name is "+ this.name + " is human " + this.isHuman);
    }
};

const me = Object.create(person);       //creates new object using existing object
me.name="Karan";
me.print(); 
*/

/* 
const obj={};

Object.defineProperty(obj,"salary",{                //defines a new property directly on an object, or modifies an 
    value:43,                                       //existing property on an object, and returns the object
    writable:false,
    enumerable:false,
    configurable:false
});

obj.salary=55;

console.log(obj.salary); 
*/

/* const obj={};

Object.defineProperties(obj,{               // defines new or modifies existing properties directly on an object, returning the object.
    salary:
    {
        value:43,
        writable:false
    },
    expenditure:{
        value:20,
        writable:true
    }
}
);
console.log(obj.expenditure); */

/* const obj={
    a:1,
    b:5,
    c:6
};

console.log(Object.entries(obj)[1]);        //returns an array of a given object's own enumerable property [key, value] pairs

 */

 /* const obj={
     a:1,
     b:2
 };

 const descriptor=Object.getOwnPropertyDescriptor(obj,"a");
//  console.log(descriptor);

 const descriptories=Object.getOwnPropertyDescriptors(obj);
// console.log(obj);

console.log(Object.getOwnPropertyNames(obj)); */

var arr = ['a', 'b', 'c'];          //[ '0', '1', '2', 'length' ]
/* const obj={};
var symbol=Symbol("a");
var symbol1=Symbol("b");
obj[symbol]='localSymbol';
obj[symbol1] = 'globalSymbol'; */

//console.log(Object.getOwnPropertyNames(arr)); 
//console.log(Object.getOwnPropertySymbols(obj));

//console.log(Object.getPrototypeOf(obj));        //{}
const obj={
    a:1,
    b:2
};
Object.preventExtensions(obj);

//console.log(Object.isExtensible(obj));

// console.log(Object.keys(obj));
console.log(Object.values(obj));
