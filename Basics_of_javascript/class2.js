// here in this class I started with the variables and some more concepts on the varibales, like when we write the keywords why do we use the capital letter people say different things and try to explain in their way but i learned tha it is earear to read.
const accountId = 12365
// here you  const is used when we don't change its value it is constant like id we will do some investigation on it 
let accountEmail = "As@gmail.com"
var accountPassword = "123221"
accountCity = "Bhubaneswar"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
usually cost and let is used in modern code when the let came into force 
another thing when we write the key word and don't assign the value then the result is known as undefined as we uderstand from the word itself
*/

// accounntId = 2 this is not allowed because it is constant and can't be changed.
accountEmail = "ak@gmail.com"
accountPassword = "2332423"
accountCity = "Rayagada"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])



