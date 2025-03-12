var daysOfWeek = new Array();
console.log(daysOfWeek.length);
var daysOfWeek = new Array(7);
console.log(daysOfWeek.length);
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednes day',
'Thursday', 'Friday', 'Saturday');
console.log(daysOfWeek);

for (var i=0; i<daysOfWeek.length;i++){
    console.log(`${i+1}: `)
    console.log(daysOfWeek[i]);
    
}

console.log('2nd question fibonacci sequence')

var fibonacci = [];
fibonacci [0] = 1;
fibonacci [1] = 1;

for (var i=2; i<20; i++){
    fibonacci[i]= fibonacci[i-1]+fibonacci[i-2];
}
for(var i=0; i<=fibonacci.length;i++ ){
    console.log(fibonacci[i])
}
console.log(fibonacci.length)
console.log(fibonacci)

console.log(':Adding elements:')
var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.push(10,11,12)
console.log(numbers);
for (var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
   }
   numbers[0] = -1;
   console.log(numbers);
//More Refine Code
   console.log('More refine code')

for (var i = numbers.length-1; i>=0; i--){
    numbers[i+1] = numbers[i]
}

numbers[0] = 77;
console.log(numbers)
numbers.unshift(23);
numbers.pop()
console.log(numbers)