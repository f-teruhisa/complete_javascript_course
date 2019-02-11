///////////////////////////////////////
// Lecture: Hoisting(巻き上げ)

calculateAge(1965);

function calculateAge(year) {
  console.log(2018 - year);
}

// hostingは変数ではなくfunctionの呼び出しでのみ起こるため、こちらは巻き上げができない
// retirement(1990);

var retirement = function (year) {
  console.log(65 - (2016 - year));
}

// variables declearation(変数宣言の場合、巻き上げはできない)

console.log(age);
var age = 23;

function foo() {
  console.log(age); // undifined
  var age = 65;
  console.log(age);
}
foo(); // age = 65(local variable)
console.log(age); // age = 23(global variable)





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
