var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];
var sum = numbers
.filter(item => item > 4)
//I don't understand how the < and > signs work in this situation. 
//I would have thought item > 4 meant item is greater than 4. 
//Thus, it would filter anything greater than 4. 
//Why does it read as item is less than 4 in this case?
.reduce((sum, item) => sum + item);
console.log(sum);
