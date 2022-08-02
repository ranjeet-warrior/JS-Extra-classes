// Q.1 what is Javascript?
// Ans: Javascript is scripting language.it is a  single threaded synchronous language .but we can use asynchronously with web api's features.It is also called interpreted language and it is dynamic typed language.
// Javascript code is executed at a time
// single threaded--one code will be executed at a time.
// combination of both compiler and interpeter is known as JIT (Just in time) compilation.
// synchronous--> after executing the first line it will be forwaded to next line/

// Q.2 what is the javascript run time environment?
// Ans: The JavaScript engine doesn’t run in isolation. It runs inside an environment called JavaScript Runtime Environment along with many other components. JRE is responsible for making JavaScript asynchronous. It is the reason JavaScript is able to add event listeners and make HTTP requests asynchronously.
//      JRE is just like a container which consists of the following components:
//     1.JS Engine
//     2.Web API
//     3.Callback Queue or message queue
//     4.Event Table
//     5.Event loop

// Q.3 what is execution context?
// Ans:creation Phase-- 1.First run, It picks all function declarations and stores them in memory with their reference.
//                      2.In the second run, It picks all variables and assign undefined to them. In the event of a conflict between variable and function declaration name then that variable is ignored.
//    Execution Phase--  JS executes our code line by line and assigns the value to the variables.

// Q.4 what is javascript Engine?
// Ans: V8 engine is Javascript engine.JavaScript engines are inbuilt in all the modern browsers today. When the JavaScript file is loaded in the browser,
//      JavaScript engine will execute each line of the file from top to bottom (to simplify the explanation we are avoiding hoisting in JS). 
//      JavaScript engine will parse the code line by line, convert it into machine code and then execute it.
//      V8            --Google Chrome
//      Spider Monkey --Moxila Firefox
//      Chakra        --Microsoft Edge Browser
     
// Q.5 flow of data in engine?
// Ans: Flow of Data Engine:-
//      Parsers:-A Parser or Syntax Parser is a program that reads your code line-by-line. It understands how the code fits the syntax defined.
//      AST:-a tree representation of the source code of a computer program that conveys the structure of the source code.
//      Execution:-Execution context allows the JavaScript engine to manage the complexity of interpreting and running our code.