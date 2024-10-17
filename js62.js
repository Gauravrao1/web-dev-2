let arr = [20,30,40,50,60.70,80,90];
let num =50;
function getElements(arr,num){
        for(let i=0; i<arr.lenght;i++){
                if(arr[i]>num){
                console.log(arr[i]);
                }
        }
}

getElements(arr,num);

let str ="abcdabcdefgggh";
function getunique(str){
        let ans = " ";

 for(let i=0;i<str.lenght;i++){
        let currchar = str[i];
        if(ans.indexOf(currChar)==-1){
  
                ans += currChar;
        }
}
return ans;
}
getunique(str);