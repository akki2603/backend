const prompt = require('prompt-sync')();


let  a = prompt("enter the name of the students");
let  c = parseInt(prompt("enter the nubmer"));


while(c<=100){
   
 if(a <=100 && a >=97){
    console.log(a +" "+ "A+");
    break;
 }


else if(c>=93 && c <=96){
    console.log(a +" "+ "A");
    break;
}


else if( c>=90 && c <=92){
    console.log(a +" "+ "A-");
    break;
}
else if( c>=87 && c <=89){
    console.log(a +" "+ "B+");
    break;
}
else if( c>=83 && c <=86){
    console.log(a +" "+ "B");
    break;
}
else if( c>=80 && c <=82){
    console.log(a +" "+ "A-");
    break;
}

else if( c>=77 && c <=79){
    console.log(a +" "+ "B-");
    break;
}
else if( c>=73  && c <=76){
    console.log(a +" "+"C+");
    break;
}
else if( c>=70 && c <=72){
    console.log(a +" "+ "C-");
    break;
}
else if( c>=67 && c <=69){
    console.log(a +" "+ "D+");
    break;
}
else if( c>=65 && c <=66){
    console.log(a +" "+ "D");
    break;
}
else if( c>=0 && c <=64){
    console.log(a +" "+ "E");
    break;
}



}

if(c<0 || c>100){
    console.log("enter valid number");
}



 










