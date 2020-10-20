// ### Declare a variable named myArr and assign an array to the variable e.g. input ==> 
const myArray = ['itemOne', 'itemTwo', ['itemThree', 'itemFour' ] ]
console.log('myArray ==>', myArray) ; // myArray ==> [ 'itemOne', 'itemTwo', [ 'itemThree', 'itemFour' ] ]

// pop and push 
myArray.push('Spain') ; //
console.log('myArray push Spain ==>', myArray) ; // [ 'itemOne', 'itemTwo', [ 'itemThree', 'itemFour' ], 'Spain' ]
// ===> Spain comes in the end, I dont know how to make it appear in the front 
myArray[2] = 'SET item2' ; 
console.log('myArray change string to SET item2 ==>', myArray) ; // [ 'itemOne', 'itemTwo', 'SET item2', 'Spain' ]
// ===> i am not able to modify the string, i Just make a new one :/ 
myArray.push('Germany') ; // 
console.log('myArray ==>', myArray) ; 

