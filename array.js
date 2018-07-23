/*Arrays*/

/*
var arr = new Array('html','css','javascript','python','scala','dotNet'); //creating an array
var length = arr.length;      //finding the length of array
console.log(arr,length);

var arr1= new Array(10);        //will create an array of length 10, incase there is only one element and is a number use square brackets
*/

/*var arr =[];
arr[20]='html';
console.log(arr.length);        //array length is one more than highest index stored
*/

//Iterating over array

/*
var arr = new Array('html','css','javascript','python','scala','dotNet'); 
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//forEach method

arr.forEach(function(arrs){
    console.log(arrs);
}); 
//or in ES5
//var arr = ['html',,'javascript',undefined,'scala','dotNet'];
arr.forEach(arrs=>console.log(arrs));       //when iterating by foreach elements which are omitted are not displayed
*/

//Array methods 

var arr1 = ['html','css','javascript',3,4];
var arr2=['python','scala','dotNet',8]; 

arr1=arr1.concat(arr2);     //concatination method

//arr1=arr1.join('-');        //joins array elements to string

//arr1.push('Go');        //add a new element to array

//arr1.shift();           //removes the first element of an array and returns that element

// arr1.pop();      //removes the last element of an array

//arr1.unshift('Go','Ruby');      //adds one or more element to the front of an array and returns the new array

//arr1=arr1.slice(2,5);       //slice a section of array and displays it

//arr1.splice(2,4,'cricket','football','hockey','tennis','basketball','volleyball');      //replaces the section of elements mentioned

// arr1.reverse();

//arr1.sort();

//var index=arr1.lastIndexOf("css"); 

//arr3=arr1.map(function(item){ return item.toUpperCase();})      //returns a new array of the return value from executing callback on every array item.

//arr3=arr1.filter(function(item){ return typeof item === 'number';});

console.log(arr3);


