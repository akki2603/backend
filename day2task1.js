const prompt = require('prompt-sync' )();
const  c = parseInt( prompt("enter the year"));
let y = c;
let n = c%4;
if(n==0 && c%100!=0 || c%400==0){
    console.log("leap year");
}


else{
     y+=4-n;
    console.log(c+"not leap year"+y+"is a leap year");
}

