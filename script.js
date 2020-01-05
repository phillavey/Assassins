//Basic jquery things
//$() is a jquery function
//you can read the docs for it but also you don't have to



// $(document).ready( () => {function here} )
// $(document).ready( function() {*function here*} )

/*
these two things do the same thing 
when the document is ready run this function
the first does arrow functions that we say when doing the backend
the 2nd just uses normal syntax
they mean the same thing the first one is just more concise
*/

$(document).ready(function () {
    //this is an example of a selector
    //I selected the button I made
    //<button id="sumbit_button" class="button is-danger">Find your target</button>
    //All I need is the id or the class name
    //$("id or class of an element you made").whatever jquery function you want
    //jquery has a .click that says whenever you click on this element => do whatever
    //here I created a function that then has another jquery selector inside of it
    //so whenever the button is clicked this function will run
    $("#sumbit_button").click(function () {


        //here I do the same thing except now I select the input field and grab it's value which 
        //jquery has an option for => .val()
        //notice how the ids of this match the ids you gave the html elements
        //you can name this whatever you want
        let text = $('#input_text').val();

        console.log("you clicked the button! and what was in the input box was: " + text);
    });



    //you can declare functions inside of other functions
    let insideFunction = function () {
        console.log("hello world!")
    }
    // insideFunction();

    //you can also add classes, datastructs, etc
});


