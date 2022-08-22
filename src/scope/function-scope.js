//function scope
//toda variable declarada en una funcion solo vive dentro de ella

function greeting(){
    let userName= 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
};

greeting();

