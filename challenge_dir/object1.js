//get falcons out the zoo

let zoo = [
    {a: "monkey", weight: 30},
    {a: "zebra", weight: 500},
    {a: "alligator", weight: 250},
    {a: "falcon", weight: 7, color: "blue"},
    {a: "falcon", weight: 5, color: "black"}
]


let pull_animal = zoo.filter(function(animal) {
    if (animal.a === "falcon") {
        console.log(animal.a) // falcon falcon
}})


