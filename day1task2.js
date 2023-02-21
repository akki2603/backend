const prompt = require('prompt-sync')();

let c = parseInt(prompt("enter the nubmer"));


let string = "";
for(let i = 1; i <= c; i++){

    for(let j = 0; j <c-i; j++){
        string += " ";
    }
    
    for(let k=0;k<i;k++){
        string += "*";
    }
    string +="\n";
}
console.log(string);