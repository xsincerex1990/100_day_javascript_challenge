let employees = {
	name: "Roberto",
	job: "Bug hunter",
	pay: "Negotiable",
	check: function () {
		console.log(this.pay)
	}
}
employees.check() // "negotiable"

let check_func = employees.check
check_func() // undefined

