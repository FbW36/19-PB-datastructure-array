//Declare a variable named myArr and assign an array to the variable
const myArr = ['item1', 'item2', ['subSubItem1', 'subSubItem2']];
// get the next output: ['Spain', 'item1', 'SET item2', ['Berlin', 'subSubItem1'], 'Germany'];
myArr.unshift('Spain');
myArr[2] = 'SET item2';
myArr[3][0] = 'Berlin';
myArr[3][1] = 'subSubItem1';
myArr.push('Germany');
console.log(myArr);
