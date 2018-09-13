//Destructuring is a ES6 feature that allows you to break objects & arrays up into variables
//It comes in good when dealing with optional objects

herbs({
        colon: ["Cascara sagrada", " Capsicum"],
        strength: ["Yohimbe", " Ginseng", " Pumpkin seed", " Saw palmetto"],
        formula: ["Bu`rdock", " Black Cohosh", " Alfafa", " Parsley"]
})

function herbs({ diabetes = ["Golden Seal", " Uva Ursi", " Juniper berries"], colon}) {
	console.log(diabetes + " is good for diabetes. " + colon + " is good for the colon.")
}
