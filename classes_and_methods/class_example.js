class Crystal {
    constructor(blue_amount, red_amount, yellow_amount) {
        this.blue_amount = blue_amount
        this.red_amount = red_amount
        this.yellow_amount = yellow_amount
    }

    total_crystal(blue_amount, red_amount, yellow_amount) {
        let bx = blue_amount * 17 //17 13 19 is the price
        let rx = red_amount * 13
        let yx = yellow_amount * 19
        console.log("Blue total " + bx + " red total " + rx + " yellow total " +
 yx)
        return this.total_worth(bx, rx, yx)
    }

    total_worth(bx, rx, yx) {
        return bx + rx + yx
    }

}

const c = new Crystal();
console.log(c.total_crystal(25, 34, 20))

