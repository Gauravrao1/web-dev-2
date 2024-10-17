let favmovie="aegers";
let guess=prompt("guess movie");
while((guess!==favmovie)&& (guess=="quit")){
        console.log("wrong");
        guess=prompt("wrong guess. plese try again");
}if(guess==favmovie){

        console.log("congrates!");
}else{
        console.log("you quit");
}