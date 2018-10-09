let camp = {
    frames: ["North", "West", "East", "South"],
    get direction() {
        if (this.frames.length == 0) {
            return undefined;
        }
        return this.frames[this.frames.length - 1];
    },  
};


Object.defineProperty(camp, "pine", {get: function() {return this.frames[0];}});
Object.defineProperty(camp, "random", {get: function() { 
    let rand_num = Math.floor(Math.random() * this.frames.length)
    let rand_dir = this.frames[rand_num]
    
    return rand_dir
}});


console.log([camp.random, camp.direction, camp.pine]) 
