function getmin(nums) {
        let min = nums.reduce((min, el) => { 
                if(min< el){
                        return min;
                }else{
                        return el;
                }
        });
        return min;
}
let nums =[10,20,30,40,5];
console.log(getmin);
let names =["tony","bruce","peter","steve","abc","xyz"];
let[winner,runner,...other] =names;
const student ={
        name:"gaurav",
        age: 18,
        class: 9,
        subjects:["etc","math","hindi","english","science"],
        username:"karan@123",
        password:"abcd",
        city:"pune",
};


let{ username: user,password:secret,city:place ="mumbai"} = student;
