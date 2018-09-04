class Block {
    constructor(b1, b2, b3) {
        this.b1 = b1
        this.b2 = b2
        this.b3 = b3
    }

    ab() {
        this.apt(2, 4, 9)
    }

    apt(b1, b2, b3) {
        console.log(b1, b2, b3)
    }
}

const x = new Block()
console.log(x.ab())        
