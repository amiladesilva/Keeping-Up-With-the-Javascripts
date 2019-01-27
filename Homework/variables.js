/*
Hoisting
========
Hoisting is a mechanisum where variable and function declarations are moved 
to the top of the scope before code is executed. So you can actually use a variable 
first and then declare it later on.
*/


/*
Var & Hoisting
==============
*/
demoVar(); // This will work as the entier function is hoisted
console.log(myName);

function demoVar() {
    // Hoisting: myName is declared before the assignment and here its globally scoped
    myName = "Amila";

    if (true) {
        // var scoped variables have a function scope
        var insideIf = true;
    }

    console.log(insideIf);
};


/*
Let
==============
*/
function demoLet() {
    if (true) {
        // let scoped variables have a function scope
        let insideIf = true;
    }

    console.log(insideIf); // Throws a reference error
};

demoLet();

/*
Const
==============
*/
function demoConst() {

    const myVar = "My Const variable";
    console.log(myVar); 
    myVar = "13123"; // Throws a TypeError 
};

demoConst();