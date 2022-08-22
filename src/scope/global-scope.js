var a; //declarar
var b ='b'; //declarar y asignar
b ='bb'; //reasignar variable
var a ='aa';//redeclarar variable

//global scope

var fruit = 'Apple';

function bestFruits(){
    console.log(fruit);
};
bestFruits();
console.log(fruit);

function countries (){
    country ='colombia';
    console.log(country);
    
}

countries();
console.log(country);