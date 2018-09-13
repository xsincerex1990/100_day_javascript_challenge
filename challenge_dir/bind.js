//bind described

var ex = {
	corp: "MM",
	getcorp: function() {
		return this.corp;
	}
}

var unboundcorp = ex.getcorp;
console.log(unboundcorp());
//undefined

var boundcorp = unboundcorp.bind(ex);
console.log(boundcorp()); // "MM"



