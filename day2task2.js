const prompt = require('prompt-sync')();

const c = parseInt(prompt("for circle press 1 : for squrae press 2 : for traingle press 3 : for rectangle press 4 : "))

const area = (b) => {
if(c==1){
    const r = parseInt(prompt("enter the radius of the circle"));
    console.log("area of circle is "+(22/7)*r*r);
}
else if(c==2){
    const r = parseInt(prompt("enter the side  of the square"));
    console.log("area of square is "+r*r);
}
else if(c==3){
    const l = parseInt(prompt("enter the length  of the rectangle"));
    const b = parseInt(prompt("enter the breadth of the rectangle"));
    console.log("area of rectangle is "+l*b);
}
else if(c==4){
    const l = parseInt(prompt("enter the base   of the traingle"));
    const b = parseInt(prompt("enter the height of the traingle"));
    console.log("area of traingle is "+0.5*l*b);}
else {
    console.log("invalid choice");

}
}
area(c);