//replace characters based on their position....
//Replace every letter in string with the letter following in the alphabet (eg: z to a, a to b...etc)

function ireplace(str) {
    let fixed = str.replace(/[a-z]/gi, function(char) {
        return (char ==='z' || char === 'Z') ? 'a': String.fromCharCode(char.charCodeAt() + 1);
    });

    let clean_str = fixed.replace(/[a|e|i|o|u]/gi, function(vowl) {
        return vowl.toUpperCase();
    });
    return clean_str;
}

console.log(ireplace("Im a string, FIX ME NOW!!!!!"));

