# Projects related to DOM 

## project link 
[Click to start](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code  

## project 1 

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

## project 2
```javascript


```

## project 3 
```javascript


```
## project 4 
```javascript


```