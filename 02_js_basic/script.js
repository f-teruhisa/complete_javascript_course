/*
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable nameing rules
var _3years = 3;
var jhonMark = 'john and Mark';
var if = 23;
*/


/*
* Variables mutations and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried; //宣言だけ先にしておいて、あとから値を入れるときれいに入る
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var c;
console.log(typeof x);
*/

/*
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x *= 10
console.log(x);
x++; // same as x += 1; & x = x +1

*/

/*
* If / else statement
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is mariied!');
} else {
  console.log(firstName + ' will hopefully maeey soon :');
}

var isMarried = true;
if (isMarried === true) {
  console.log(firstName + ' is mariied!');
} else {
  console.log(firstName + ' will hopefully maeey soon :');
}
*/

/*
* Boolean Logic
*/

/*
var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else {
  console.log(firstName + ' is a man.');
}
*/

/*
* The Ternary Operator and Switch Statement
*/
/*
var firstName = 'John';
var age = 20;

// 三項演算子
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

// 上記と下記は同じ
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}

// Switch Statement
var job = 'instractor';
switch (job) {
  case 'teacher':
  case 'instractor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does somethings else.');
    break;
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
    break;
}
*/

/*
* The Ternary Operator and Switch Statement
*/
/*
var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT benn defined');
}

// Equality oerators
if (height == '23') {
  console.log('The == operator does type coercion!')
}
*/

/*
* Functions
*/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMark = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMark, ageJane);

function yearsUntillRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retures in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already reitred.');
  }
}

yearsUntillRetirement(1990, 'John');
yearsUntillRetirement(1948, 'Mike');
yearsUntillRetirement(1969, 'Jane');

*/

/*
* Functions Statements and Expressioons
*/

/*
// Function declearation(宣言)
// function whatDoYouDO(job, firstname) {}

// Function expression（句）
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.';
    case 'designer':
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*
* Arrays
*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); // not usually use this

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Defferent data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*
* Objects and properties
*/

/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*
* Objects and methods
*/
/*
// method = function property that object have
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function (birthYear) {
    return 2018 - this.birthYear; //this can access same object
  }
};

john.calcAge();
console.log(john);
*/
/*
var john = {
  fullName: 'John Smith',
  mass: 58,
  height: 1.78,
  calcBMIs: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Smith',
  mass: 68,
  height: 1.8,
  calcBMIs: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMIs();
mark.calcBMIs();
console.log(john.fullName + '\'s BMI is ' + john.bmi);
console.log(mark.fullName + '\'s BMI is ' + mark.bmi);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have same BMI' );
}
*/

/*
* Lops and iteration
*/
/*
for (var i = 0; i < 10; i++){
  console.log(i);
}

// for loop
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
  i++;
}


for (var i = john.length - 1; i >= 0; i--){
  console.log(john[i]);
}
*/

