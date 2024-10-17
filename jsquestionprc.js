//let n=10;
//if(n%10==0){
  //      console.log("good")
//}else{
  //      console.log("bad")

//}
 //Question 2 ans
 //let age = prompt("AGE");
 //let name = prompt("NAME");
//console.log(name +" is "+age+" year old")
//Q-3 write switch statment print
//let n = 90;
//switch(n){
//case 1:
       // console.log("January ,feburay,march");
       // break;
//case 2:   
//console.log("Aprial,may,june");
 //break;
 //case 3:
       // console.log("july ,Aug,september");
//break;
//case 4:
       // console.log("october","November","December");
//default:
        //console.log("wrong input")
///
let str ="gaurav rao";
if((str[0]=='a'||str[0]=='A')&&(str.lenght>5)){
        console.log("Golden string")
}else{
        console.log("not a golden string")
}
let n=32;
let k=47852;
if(n%10==k%10){
        console.log("yes")
}else(
     console.log("no")   
)
let arr =[7,9,0,-2];
let j = 3;
let s =arr.splice(0,j);
console.log(s)

let ans = arr.splice(j,arr.length-j);
console.log(ans)

if(str.lenght==0){
        console.log("our string is blank")
}else{
        console.log("our string is not blank")
}

let str_1 ="Gaurav rao";
let index = 4;
if(str_1[index]==str_1.toLowerCase){
        console.log("char at this index in  lower case")
}else{
        console.log("not in lower case")
}

let st = prompt("plese enter you text which you want without sapce");
console.log("orginal string = " + st);
console.log("String without spaces"= (st.trim));

let a = 50;
let p = [10,20,50,60];
for(let i=0;i<p.length;i++){
      if ( p[i]==a){
        console.log("yes this number is present");
      }
      else{
        console.log("it's not present");
      }
}