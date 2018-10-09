//Return longest word stripping punctuation

    /* match searches the string for the
     * pattern and returns an array of strings
     * stripping punctuation*/

    /* 
     array sort function takes a function as a parameter
     which is used to compare each element in the array to the
     next element in the array */


function lStr(str) {
    let arr = str.match(/[a-z0-9]+/gi);

    let fixed_arr = arr.sort(function(a, b) {
        return b.length - a.length;
    })
    
    //The array is now in order so we can return the first one
    return console.log(fixed_arr[0])
}

lStr("Hello i like healthy food & spaceships");

