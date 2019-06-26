function square(number) {
   return number * number;
}
var cube = function cube(number) {
    return number * number * number;
 };
console.log(square(2));
console.log(cube(3));

function isEven(number) {
    if(number%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isOdd(number) {
    return number % 2 == 1 ? true : false;
}
function isOddsimple(number) {
    return number % 2 == 1;
}
console.log(isEven(11));
console.log(isEven(12222));

var hello = "hiiii";
console.log(hello);
function whatsthis() {


}