class Computers {
    constructor(ram, gb, cpu) {
        this.ram = ram
        this.gb = gb
        this.cpu = cpu
    }

    stats() {
        this.info(12, 8, 'i7');
    }

    info(ram, gb, cpu) {
        console.log(ram, gb, cpu)
    }
}

const ins = new Computers();
ins.stats()

console.log(typeof Computers)
console.log(typeof ins)
