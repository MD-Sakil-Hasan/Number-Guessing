

let guessBtn = document.querySelector('.guess-btn')
let showNum = document.querySelector('.random-number')
let domGuessedNum = document.querySelector('.guessed-num')

let low = 1;
let high = 10;


let correctAns = Math.floor((Math.random() * 10)+1);


guessBtn.addEventListener('click', function(){
  guessedNum = prompt('Guess a number between 1 to 10')

  let switchToSecondChance;
  let switchToThirdChance;
  
  if(guessedNum == correctAns){
      alert('Congratulation! You Win.')
    } else if(guessedNum > correctAns){
        guessedNum = prompt(`Correct Number is less than ${guessedNum}, try again`)
        switchToSecondChance = true;
    } else if(guessedNum < correctAns){
        guessedNum = prompt(`Correct Number is greater than ${guessedNum}, try again`)
        switchToSecondChance = true;
    } else{
        alert('Input is not a number, try again')
        switchToSecondChance = true;
  }
  
  if(switchToSecondChance = true){
  
    if(guessedNum == correctAns){
      alert('Congratulation! You Win.')
    } else if(guessedNum > correctAns){
        guessedNum = prompt(`Correct Number is less than ${guessedNum}, try again`)
        switchToThirdChance = true;
    } else if(guessedNum < correctAns){
        guessedNum = prompt(`Correct Number is less than ${guessedNum}, try again`)
        switchToThirdChance = true;
    } else{
      alert('Input is not a number, try again')
      switchToThirdChance = true;
    }
  }
  
  if(switchToThirdChance = true){
  
    if(guessedNum == correctAns){
      alert('Congratulation! You Win.')
    } else if(guessedNum > correctAns){
        alert(`Oops You Lost! Correct Number is ${correctAns}`)
    } else if(guessedNum < correctAns){
        alert(`Oops You Lost! Correct Number is ${correctAns}`)
    } else{
      alert('Oops You Lost! Input is not a number')
    }
  }

  domGuessedNum.innerText = guessedNum;
  showNum.innerText = correctAns;
  
})

