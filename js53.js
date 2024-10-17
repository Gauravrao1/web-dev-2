console.log("hello world");
let a=10;
let b=20;
console.log("total"+(a+b));
console.log('');
console.log("before if statmmeent");
let age=23;
if(age>=18){
        console.log("You can vote");
}
console.log("after if statment");
//alert("Something is wrong !");
console.error("This is errror msg;"); 
let firstname =prompt("Your first name ");
console.log("your name is "+ firstname);
// practice question;//
let num= 700;
if(num%10===0){
        console.log("Good");
}else{
        console.log("bad");
}


let name = prompt("enter your name");
let aage=prompt("enter your age");
console.log(name +"is"+aage+"years old")

let number=1;
switch(number){
        case 1:
                console.log("Jaunauray,Febaury,March");
                break;
        case 2:
                console.log("April,may,june ");
                break;
        case 3:
                console.log("july,Aug,Sep");
                break;

        case 4:
                console.log("october, November,Decmber");
                break;
}
 let str="Gaurav rao";
if((str[0]==a||str[0]==A)&&str.length>5){
        console.log("it's Golden words");
}else(
        console.log("it's not Golden words")
)