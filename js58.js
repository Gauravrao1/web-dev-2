//function oddOrEvenFactory(request){
       // if(request == "odd"){
       //         return function(n){
       //         console.log(!(n%2==0));
       //         }
       // }else if(request == "even"){
        //        return function(n){
        //        console.log(n%2 == 0);
               // }
//
       // }else{
       //         console.log("wrong request")
       // }
//}
//let request ="odd";
const student ={
        name:"aman",
        marks:95,
        prop: this,//global scope
        getName: function(){
        console.log(this);
        return this.name;
        },
        getmarks:()=>{
         console.log(this); // parent's scope ->window
         return this.marks;
        },
        getInfo1:function(){
        setTimeout(() =>{
                console.log(this); //student
        },2000);
        },
        getInfo2: fuction() {
        setTimeout(function (){
        console.log(this); //window
                },2000);
        }
}