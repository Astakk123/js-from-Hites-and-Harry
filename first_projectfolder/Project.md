# Projects related to DOM 

## project link 
[Click to start](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code  

## project 1 solution code (color switching)

```javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button){
  button.addEventListener('click', function(e){
    //here e function will work on click but at what case so the target is here id and id is grey and white it select the element and the color name is same as id so we have used e.target.id in the place of color, one can give the color value directly 
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2 solution code (BMI making)
```javascript
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)  this is how we find value and then parse the value into integer but we don't do it out of the method because this is used in the usecase of the empty, but we need value, we want to retrive it when our evernt work

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height youhave entered ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight you have entered ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }

  const your = parseInt(document.querySelector('#results').value);
  const you = document.querySelector('#you');
  if (your < 18) {
    you.innerHTML = `you are under weight`;
  } else if ( your > 18 && your <25){
    you.innerHTML = `you are Normal`
  }else {
    you.innerHTML = `you are overweight`
  }
});

```

## project 3 solution code
```javascript
const clock = document.getElementById('clock');

// let date = new Date()
// console.log(date)
// console.log(date.toLocaleTimeString()) // this is how we declare time and we get local time

// setInterval(function (){
//   let date = new Date()
//   console.log(date.toLocaleTimeString())
// }, 1000)

// we did this just to know whethere it is working or not using console now its time to show it

//setting up interval and completing 

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//added some style 
clock.style.color = 'black'
clock.style.backgroundColor = 'white'

```
## project 4  (Guess Number Game)
```javascript
//not completed yet 

const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const Guesses = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('you guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('your guess is Too low');
  } else if (guess > randomNum) {
    displayMessage('your guess is Too High');
  }
}

function cleanUpGuess(guess) {
  userInput.value = '';
  Guesses.innerHTML += `${guess},    `;
  numGuess++;
  guessRemaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    Guesses.innerHTML = '';
    guessRemaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```