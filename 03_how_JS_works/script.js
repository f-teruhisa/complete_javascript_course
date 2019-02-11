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




// Example to show the differece between execution stack and scope chain


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
    // console.log(c); //c is undifined, cannot access variable c. cuz c is not located third() function's scope chain.
    console.log(a + d)
}


///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    /*
    console.log(2016 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction(); */
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
