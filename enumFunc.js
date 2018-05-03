var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];
var sum = numbers
.filter(item => item < 4)
.reduce((sum, item) => sum + item);
console.log(sum);