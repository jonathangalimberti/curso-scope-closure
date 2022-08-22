function fruits(){
    if (true){
        var fruit1= 'Apple';
        let fruit2= 'orange';
        const fruit3= 'Banana';
    };
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//declarar con var dentro de un bloque lo hace function scope, para que esto ocurra
//de forma correcta se declara con let o const
//let permite que el valor varie con el tiempo pero const lo mantiene fijo.