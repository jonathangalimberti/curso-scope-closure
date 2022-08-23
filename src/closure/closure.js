function greeting (){
    let userName = 'oscar';

    function dysplayUserName(){
        return `Hello ${userName}`;
    }
    return dysplayUserName;
}

const g = greeting();

console.log(g);
console.log(g());
