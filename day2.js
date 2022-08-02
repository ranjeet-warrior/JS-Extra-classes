//Day 2 js extra class
// 1) Different Data types available in JavaScript ?

//Ans. There are basically two types of Datatypes in JavaScript :-
  //1)Primitive Datatypes :-
      //a) String
      //b) Number
      //c)BigInt
      //d)Boolean
      //e)Undefined
      //f)Null
      //g)Symbol

   //2.Non-primitive Datatypes :-1)Objects 2)Arrays

//2) In how many ways we can declare variable ? what is difference between them
 // Ans . We can declare variable using three ways :-
          //1)var 2)let 3)const
      // difference between var let and const :
      //From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
   //2. The keyword 'Var' has function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
   //3. 'var' declares a variable that will be hoisted but 'let' declares a variable that will be hoisted.
        // const is block scoped and cannot be redeclared

  //3) What is Hoisting ?
   
  // Ans. Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

            hoistedFunction(); // Outputs " Hello world! " even when the function is declared afte
           function hoistedFunction(){ console.log(" Hello world! ");
              }

             // Hoisting takes place in the local scope as well
            function doSomething(){ x = 33;
            console.log(x);
            var x; }  

             var x;
            console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted x = 23;
            x = 23;

//4) What is Temporal Dead Zone ?

//Ans. Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. 
       //It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:

       x = 23; // Gives reference error
       let x;
       function anotherRandomFunc(){
       message = "Hello"; // Throws a reference error
       let message; }
       anotherRandomFunc();

//5)What is difference between == and === operators ?
//Ans.Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas,
// “ === “ is used to compare both values and types.  
var x = 2;
var y = "2";
(x == y) // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string" 

//6) What are the different type of operators in javascript ?
// Ans. 1) Arithmetic Operators
   //   2) Logical Operators
   //   3) Relational Operators
   //   4)Conditional Operators
   //   5) BitWise Operators