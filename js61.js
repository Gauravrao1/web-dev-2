
let n = prompt("enter your number which you want factoral");
let fact = 1;
for(let i=1;i<=n;i++){
   fact *= i;

}
console.log("n factorial is "+ fact);

// find the largest in an array with only positive numbers.
let arr = [30,10,30,40,50,60,20];
let max = 0;
for(let i=0;i<arr.length;i++){
     
        if(max<arr[i]){
         max = arr[i];
        }
     }

console.log(max);
let g = prompt("roll or stop");
if(g = "roll"){
let m =6;
let dice = Math.floor(Math.random()*m)+1;

console.log(dice);}
else{
        console.log("stop");
}

const car ={
        name:"maruti suzuki",
        model:"maruti Suzki Dzire",
        color:"white",
};
console.log(car.name);

const person = {
        name:"Gaurav rao",
        age:20,
        city:"patherdewa"
};
person.city ="Newyrok";

console.log(person)