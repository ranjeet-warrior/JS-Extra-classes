// 1) What is Function and type of function
//Ans. A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.
   //    There are three types of functions in JavaScript :-
         //a) Named Function
         //b) Annonymous Function
        // c) IIFE(Immediately Invoked Function Expression) 


// 2) What is Annonymous Function
//Ans. Function without having a name is known as Annonymous Function
        let show = function() {
        console.log('Anonymous function');
         };
        show();


// 3) What is IIFE or What is Function Expression
// Ans.  An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
         (function(){
          // Do something;
         })();


// 4) What is Arrow Function
// Ans. Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. 
      //Arrow functions can only be used as a function expression.
        // Traditional Function Expression
          var add = function(a,b){ return a + b;
           }
       // Arrow Function Expression
          var arrowAdd = (a,b) => a + b;



// 5) What is Higher Order Function
// Ans. Functions that operate on other functions either by taking them as arguments or by returning them , are called higher order functions
        //Examples of higher-order functions:
        function higherOrder(fn) { fn();
        }
        higherOrder(function() { console.log("Hello world") });


// 6) What is First Class Function
// Ans.A programming language is said to have First-class functions when functions in that language are treated like any other variable.
       const foo = function() {
       console.log("foobar");
       }
       foo(); // Invoke it using the variable
      // foobar 


// 7) What is Callback Function
// Ans. Functions that are used as an argument to another function are called callback functions
        function divideByHalf(sum){ console.log(Math.floor(sum / 2));
        }
        function multiplyBy2(sum){ console.log(sum * 2);
        }
        function operationOnSum(num1,num2,operation){ var sum = num1 + num2;
        operation(sum);
        }
       operationOnSum(3, 3, divideByHalf); // Outputs 3 operationOnSum(5, 5, multiplyBy2); // Outputs 20

       

// 8) What is setTimeout() and setInterval()
 // Ans. The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
        setTimeout(() => {
      console.log("Delayed for 1 second.");
     }, "1000")

     //The setInterval() method, offered on the Window and Worker interfaces, 
     //repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
     const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

     function myCallback(a, b)
     {
 // Your code here
 // Parameters are purely optional.
     console.log(a);
     console.log(b);
   }
