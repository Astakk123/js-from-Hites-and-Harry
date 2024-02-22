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
//strategy should be written first on plane paper

let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
console.log(p);

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// first check wheter you are eligible to play the game or not like this

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

// this is the step wher we declare the full sequence 
// first check it number or any other and print alert then it pushes the value to the array and then check the num of guess then it is clean up guess and then show message according to and then finish the game if it fulfill the condition else clean up *clenup is used twice because if it end the game because the num guess is equal to the maximum attempt the also it clean up or if it doesn't then also it clean up 

// then it passes to the check method i.e checkGuess(guess)

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a number ');
  } else if (guess < 1) {
    alert('please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over, RandomNumber was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
// in this check method we check the value of the input given by user and compare with the random generated number and print message if he win it will end the game and hence newgame 
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you Guessed it right`);
// i thing endGame() should be here, this is important point to be discussed
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low `);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

// in thei cleanUpGuess(guess) we have defined to clean up the input box and the guessed value to add in the preveous guesses and numguess should increase and remaining should calculate 

function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  guessRemaining.innerHTML = `${11 - numGuess}`;
}

//in this functio we have defined the dispaymessage(message) where to show 

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// here in the endGame() method we have defined what will happen when this function will work like it will clean the userInput and disable it and appending a new p which had been created above with an id and writting start new game then stoping the game and then passing it to newGame()

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// here we are trying to add even on the above created button and reserting all to play again like the sequece you can see

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = [];
    numGuess = 1
    guessSlot.innerHTML = ''
    guessRemaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true
  });
}


```

## project 5 (unlimited color change on click using setInterval)     : solution Code

```javascript 

//generating a random color in hexcode
// random color can be generated using random hexvalue

function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}
/*
finally generated the hex value and pushed to the color which is # then it become a six digit  and one # code which gives color these number are like  #DF021E it keep generating which is keep changing the color as the number changed 
*/
console.log(randomColor()); // this is checking the random color number like #0A331F

// Here we are setting time interval i.e when to change

let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
  /*
   interval null is used to flush out so that if we click the start nutton again and again then it will never over ride means not repeat when the one click is going on.  ofter doing this we give a condition check to the startchangingColor cunction so that if there is any click going on then it will not allow another if that is not there then only it will work. so it is a clean code writting prcatice 
   */
};

// targetting button and giving click even and refering to the given variable

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```