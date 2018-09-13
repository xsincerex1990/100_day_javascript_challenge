const tables = {
    size: "Large",
    color: "Red",
    brand: "Nice tables",
    info() {
        return `Table is ${this.size} & painted ${this.color}`
    }
}

const w = tables.info()
console.log(w)

