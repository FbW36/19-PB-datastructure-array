const myArr = ["item1", "item2", ["subSubItem1", "subSubItem2"]];
myArr[1] = 'Spain'
myArr[2] = 'SET item2'
myArr[3][0] = "Berlin"
myArr[3][1]= 'subSubItem1'
myArr.push("Germany");
myArr.push('Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany');
