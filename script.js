const  All_Button =  document.querySelectorAll('.button button')
let user_display  =  document.querySelector('.user_display')  
let computer_display  =  document.querySelector('.computer_display')  
let result  =  document.querySelector('#result')  

let user_ans  =  "" ; 
let computer_ans =  ""
let random_Number   = undefined ; 

function generateNumber (){
    return  Math.floor(Math.random()*10 +1)
} 
function winMessage (){
    return `You Won! The Game` ;
}
function LossMessage (){
    return `You Loss! The Game` ;
}
function TieMessage (){
    return `Better Luck Try Again` ;
}

function computer_Play () {
    return function(){
        if (random_Number){
            if (random_Number >= 0  && random_Number <=3){
                computer_display.innerHTML =   'ROCK';
                computer_ans  =  'ROCK';
                if(computer_ans  ===  user_ans){
                    result.innerHTML =  TieMessage() 
                }
                else if (user_ans  === 'PAPER'){
                    result.innerHTML  =  winMessage()
                }
                else{
                    result.innerHTML  =  LossMessage()
                }
            }
            else if (random_Number >= 4 && random_Number <= 7){
                computer_display.innerHTML =   'PAPER'
                computer_ans  =  'PAPER'
                if(computer_ans  ===  user_ans){
                    result.innerHTML =  TieMessage()

                }
                else if  (user_ans  === 'ROCK'){
                    result.innerHTML  =  LossMessage()
                }
                else{
                    result.innerHTML  =  winMessage()
                }
            }
            else if (random_Number >= 8 && random_Number <=10){
                computer_display.innerHTML  =  "SCISSOR"
                computer_ans  =  'SCISSOR'
                if(computer_ans  ===  user_ans){
                    result.innerHTML =  TieMessage()
                }
                else if ( user_ans  ===  'PAPER'){
                    result.innerHTML =  LossMessage()
                }
                else{
                    result.innerHTML  =  winMessage()
                }
            }
        } 
    }
}

All_Button.forEach(function(val){
        val.addEventListener("click"  ,  function (e) {
            random_Number = generateNumber()
            computer_display.innerHTML  =  '.......'
            result.innerHTML  =  'Making Result  ......'
            if  (e.target.id  === 'rock'){
                user_display.innerHTML  =  'ROCK' ; 
                user_ans  = 'ROCK' ;
                setTimeout(computer_Play() , 1000)
            }
            else if  (e.target.id  === 'paper'){
                user_display.innerHTML  =  'PAPER' ; 
                user_ans  = 'PAPER' ;
                setTimeout(computer_Play() , 1000)
            }
            else {
                user_display.innerHTML  =  'SCISSOR' ;
                user_ans  = 'SCISSOR' ;
                setTimeout(computer_Play() , 1000)
            }
        })
})