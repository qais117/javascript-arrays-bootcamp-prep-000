var chocolateBars = ["sickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element); return array;}
 function accessElementInArray(array, index) {  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();  return array;
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}
