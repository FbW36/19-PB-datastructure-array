const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
myArr.push("input");
console.log("input==>", myArr);

const myArr2 = [
  "Spain",
  "item1",
  "SET item2",
  ["Berlin", "subSubItem1"],
  "Germany",
];
const myArrOutput = myArr2[1];
console.log("myArrOutput:", myArrOutput);

myArr2.pop(myArr2.length - 1);
console.log(myArr2);
