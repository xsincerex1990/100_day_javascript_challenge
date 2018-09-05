function b() {
}
 
function a() {
    b()
}

a()
/* When we run this file javascript creates a "Global Execution Context" and code is executed.
 
 * Then it goes to "a()" and creates a new "Execution Context"(placed on top of the stack) and executes the code. 
 
 * Then it creates a new "Execution Context" for "b()" but theres is nothing so it pops the Execution Context of the stack */


/* Javascript executes line by line..... */

function a() {
    b() // Inside a()'s  scope b() is executed 1st, & after its done "let c;" is executed. 
    let c; 
}


function b() {
    let d;
}   

a() // When we run script, GEC is created code is executed first it comes here and creates a NEW execution context and places it on top of the GEC on the stack.

let x; // Lastly after b() was popped then a() was popped of the stack and "let x" was executed lastly on GEC

