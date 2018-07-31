//icheck tests for a variable called YourFeat, and if found, uses it, but if not, uses its own. 
//Now if someone includes this utility in their program/module, it safely checks if they've defined YourFeat or not

function icheck() {
    var helper = (typeof YourFeat !== "undefined") ? YourFeat: function() { "feature" };

    var val = helper();
}



// an IIFE (Immediately Invoked Function Expressions) 
// Discussion in the scope & closures


(function(){
        function YourFeat() { /* feature */ }
        //include 'icheck(..)'
        function icheck() {
            var helper = (typeof YourFeat !== "undefined") ? YourFeat : function() { //default feat 
            };
            var val = helper();
        }
        icheck();
})();

//ABOVE^ YourFeat is not at all a global variable, but were still using the safety guard of typeof to make
//it safe to check for. ANd importantly, here theres no object we can use to make the check, so typeof is useful

//Below its a pattern called "dependency injection" where instead of icheck() inspectong implicilty for yourfeat 
//to be defined outside or around it would need to have the dependcy explicitly passed in like this below:


function icheck(YourFeat) {
    var helper = YourFeat || function() { /* default feat */ } 

    var val = helper();
}
