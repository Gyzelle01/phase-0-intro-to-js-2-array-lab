// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}
//destructivelyPrependCat
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
//destructivelyRemoveLastCat
function destructivelyRemoveLastCat() {
  cats.pop();
}
//estructivelyRemoveFirstCat
function destructivelyRemoveFirstCat() {
  cats.shift();
}
//appendCat
function appendCat(name) {
  const newArray = [...cats, name];
  return newArray;
}
//prependCat
function prependCat(name) {
  const newArray = [name, ...cats];
  return newArray;
}
//removeLastCat
function removeLastCat() {
  return cats.slice(0, -1);
}
//removeFirstCat
function removeFirstCat() {
  return cats.slice(1);
}


console.log(cats); 
destructivelyAppendCat("Ralph");
console.log(cats);
destructivelyPrependCat("Bob");
console.log(cats); 
destructivelyRemoveLastCat();
console.log(cats); 
destructivelyRemoveFirstCat();
console.log(cats); 
const newCatsArray = appendCat("Tom");
console.log(newCatsArray); 
prependCat("Jerry");
console.log(cats);
{
  const newCatsArray = removeLastCat();
  console.log(newCatsArray); 
  console.log(cats);
}
