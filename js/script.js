var a = prompt('Enter first number');
var b = prompt('second number');
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value);


if  (value > 0) {
    console.log('result is positive'); 
}   
else if (value < 0) {
	console.log('result is negative');
}
else {
	console.log('value is equal to zero')
}


