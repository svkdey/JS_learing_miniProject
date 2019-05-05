var game=document.querySelector('#game');
var guessbtn = document.querySelector('#guess-btn');
var guessinput = document.querySelector('#guess-input');
var message = document.querySelector('.message');
var maxNum= document.querySelector('.max-num');
var minNum = document.querySelector('.min-num');

let min=2,max=15,wininigNum=getWinNum(),guessLeft=3;
;

minNum.textContent=min;
maxNum.textContent=max;
function getWinNum(){
    var num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);
 return num;
}
guessbtn.addEventListener('click',()=>{
   let guess= parseInt(guessinput.value);
   
   if(isNaN(guess)||guess>max||guess<min){
       setMsg(`please enter a number between ${min} and ${max}`,'red')
   }
   if(guess===wininigNum){
       gameOver(true, `${wininigNum} is correct!!`);
       
   }else{
    guessLeft-=1;
       if (guessLeft===0){
            //game over
          // guessinput.disabled = true;
           //guessbtn.removeEventListener('click', gameOver(false, `Game over!!` ))
           gameOver(false, `Game over!! the correct number was ${wininigNum}`);
           //setMsg();
       }else{
            //game continues-ans wrong
           guessinput.style.borderColor = 'red';
           guessinput.value='';
           setMsg(`${guess} is not correct,guesses left ${guessLeft}`, 'red');
       }
   }
})
game.addEventListener('mousedown',(e)=>{
    if (e.target.className ==='play-again'){
        window.location.reload();
    }
})

function gameOver(won,msg){
    var color;
    won===true?color='green':color='red';
    guessinput.disabled = true;
    message.style.color=color;
    guessinput.style.borderColor = color;
    
    guessbtn.value='Play Again';
    guessbtn.className+='play-again';
    setMsg(msg);
}
function setMsg(msg,color='green'){
    message.style.color=color;
    message.textContent=msg;
}