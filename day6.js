//PART 1

// 2
// alert(“I’m invoked!”);

// alert("I'm JavaScript!");
// alert('Hello');
// alert('Wor
//  ld')
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// space=" ";
// admin = fname + space +lname;
// alert( admin ); // "Guvi geek"

// let fname=10.5; 
// fname = "Guvi";
// space=" ";
// lname = "geek"
// let name = fname + space +lname;
// alert( `hello ${name}` );

// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// let c = a+b;
// alert(c);


// 4.Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// bacuse at first it compares string 2 with 1
// var a = 2 > 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }


// 5.How to get the success in console.
// let b = (prompt("Enter a number?"));
// a=parseInt(b)
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// 6.How to get the correct score in console.
// let value =parseInt( prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }
// 7.Fix the code to welcome the boss
// let message;
// if (null || 2 || undefined )
// {
//    message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);
  
// 8.Fix the code to welcome the boss
// let message;
// let lock =null;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
  
// 9.Fix the code to welcome the boss
// let message;
// let lock =null;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);
// 10.Whats the msg printed and why? Guess you answer before running it.
// var lemein = '0';
// var lemeout = 0;
// var msg = '';
// if (lemein) {
//  msg += 'hi';
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg); //hi

// because string 0("0") is cnsidered true 


// Part 2 :
//  Find the culprits and nail them — debugging javascript loops
// 1.Write a code to print the numbers in the array
// Output: 1234567891011
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);
// 2.Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = new String(numsArr[0]);
 
// for (var i = 1; i < 11; i++) {
//  new_string += "," +numsArr[i] 
// }
// console.log(new_string);

// 3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = new String(numsArr[10]);
 
// for (var i = 9; i >= 0; i--) {
//  new_string += " "+ numsArr[i] 
// }
// console.log(new_string);

// 4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// 5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if((i+1) %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// 6.Write a code to add all the numbers in the array
// Output: 66
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=10; i++) {
 
//  sum += numsArr[i]
// }
// console.log(sum);

// 7.Write a code to add the even numbers only
// Output: 30
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

// 8.Write a code to add the even numbers and subract the odd numbers
// Output: 94

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0)
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);


// 9.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//  console.log( numsArr[i])
 
//  10.Write a code to print elements in the inner arrays
// Output: 1234567891011

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="0";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);



// Part3

// 1.aa = (f,s,t) => {
//  //let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);

// 2.let n = "123";
// console.log(add(n));
// function add(n)
// {
// let sum = 0;
// for(var i=0;i<n.length;i++){
//  sum+= parseInt(n[i])

//  }
//  return sum;
// }

// 3.const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++){
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

// 4.var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[i].toUpperCase() + arr[i].substr(1));
//  }
// }
// ano();