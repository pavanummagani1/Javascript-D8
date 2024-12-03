//Question-1
console.log(true && false);

//Question-2
console.log(false || true);

//Question-3
var result = !true;
console.log(result);

//Question-4
console.log(10>5 && 3<4);

//Question-5
console.log(5===5 || 5>10);

//Question-6
const x = false;
const y = true;
console.log(x&&y||!x);

//Question-7
console.log(!!(5>3));

//Question-8
const result1 = false || 0 || "hello"
console.log(result1);

// Question-9
console.log(null && "Javascript");

//Question-10
console.log(true||false&&false);

//Question -11
console.log(!("hello"&&0));

//Question-12
console.log(10 || 0 && 5);

//Question-13
const res = "abc" && "def" || "";
console.log(res);

//Question-14
console.log(3>2 && 2>4);

//Question-15
console.log(false || NaN || undefined);


//Scenario-based Questions
//Question-16
var grade = "A";
var attendence = 35;
var res1 = ((grade=="A"||"B")&&(attendence>=75))?'Eligible for Scholarship':'Not eligible for scholarship';
console.log(res1);

//Question -17
var age = 22;
var res1 = (age<13)?'Child':(age>13&&age<16)?'Teenager':'Adult';
console.log(res1);

//Question-18
var isLoggedIn = true;
var sessionActive = false;
var result = (isLoggedIn && sessionActive)?'Welcome Back':'Please Log In';
console.log(result);

//Method-2
var isLoggedIn = true;
var result = (isLoggedIn)?'Welcome Back':'Please Log In';
console.log(result);

//Question-19
var score = 60;
var grade = (score>=90)?'Grade-A':(score>80 && score<89)?'Grade-B':(score>70&&score<79)?'Grade-C':'Fail';
console.log(grade);


//Question-20
var price = 120;
var discountedPrice = (price>100)?`Discount is 20% and you're total price is ${price-price*(20/100)}`:`Discount is 10% and you're total price is ${price-price*(10/100)}`;
console.log(discountedPrice);