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

## project 3 
```javascript


```
## project 4 
```javascript


```