let str = "abcdabcdefgggh";
function getunique(str){
        let ans = " ";

 for(let i=0;i<str.lenght;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar)==-1){
  
                ans += currChar;
        }
}
return ans;
}
getunique(str);