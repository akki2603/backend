const fs = require('fs')

const prompt = require('prompt-sync')();

const n = parseInt(prompt("enter the number"));
//fs.mkdirSync("fileHandling");
fs.writeFileSync("fileHandling/table.txt", "table is ");
let a = (n) =>{
let i = 1;
while(i<=10){

let tab = n*i;
let string = tab.toString();
fs.appendFile("table.txt ",n+"*"+i+"="+string+"\n", function(err){
    if(err) throw err;
    console.log("THE DATA WAS APPEND TO THE FILE");
    
})

i++;


}

}

a(n);
