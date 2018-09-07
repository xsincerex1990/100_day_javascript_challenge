let artists = {
    frames: ["West", "East", "South"],
    get mix() {
        if (this.frames.length == 0) {
            return undefined;
        }
        return this.frames[this.frames.length - 1];
    },  
};
Object.defineProperty(artists, "pine", {get: function() {return this.frames[0];}});
 
console.log(artists.mix); //South
console.log(artists.pine) // West
