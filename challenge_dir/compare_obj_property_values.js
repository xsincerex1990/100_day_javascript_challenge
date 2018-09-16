//compare two objects to determine if the first one contains equivalent propertyvalues to the second one & if there is, output the names.
let obj1 = {
    name1: "Jane",
    name2: "Mark",
    name3: "Megan",
    name4: "Cesar",
    name5: "Bryan",
    name6: "Vanessa",
    name7: "Nancy",
    name8: "Berto",
    name9: "Juan"
}

let obj2 = {
    name1: "Joel",
    name2: "Carmen",
    name3: "Max",
    name4: "Cesar",
    name5: "Vanessa",
    name6: "Tony",
    name7: "Juan",
    name8: "Kelvin",
    name9: "Savi"
}

let all_names_sorted = Object.values(obj1).concat(Object.values(obj2)).sort()
let matching_names = [];

for (let i = 0; i < all_names_sorted.length; ++i) {

    if (all_names_sorted[i] == all_names_sorted[i + 1]) {
         matching_names.push(all_names_sorted[i]);

    }
};


console.log(matching_names) // [ 'Cesar', 'Juan', 'Vanessa' ]


    
