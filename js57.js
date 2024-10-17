const max= prompt("enter the max number");
const random = math.floor(math.random() * max) + 1;
let guess = prompt("guess the number");
while(true){
        if(guess == "quiet"){
        console.log("user quit");
        break;
}
if(guess == random){
 console.log("you are right! congrats!! random number was", random); 
 break;
}
else if(guess <random){
        guess=prompt("hint : your guess was too small.plese try again")
}else{
        guess=prompt("hint:your guess is too large. plese try again")
}
}