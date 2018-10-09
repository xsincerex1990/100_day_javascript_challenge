const cpu = {
    name: "Acer",
    gb: 8,
    get info() {
        return `${cpu.name} ${cpu.gb} `
    },

    set info(val) {
        // valid string check

        if (typeof val !== 'string') return;
        const part = val.split(' ')
        this.name = part[0]
        this.gb = part[1]
    }
}

cpu.info = 'HP 10'
console.log(cpu.info)
