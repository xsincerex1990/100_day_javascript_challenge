class Motors {

	// Constructor method is used for creating & initializing an object

	constructor(product1, product2, product3) {
        this.product1 = product1;
        this.product2 = product2;
        this.product3 = product2;
	}
	// Get method
    amount() {
        this.total(7, 88, 99)
        return 'hello'
    } 
	total(product1, product2, product3) {
        //return product1 + product2 + product3;
        console.log(product1, product2, product3) 
	}
}
	

const m = new Motors()
console.log(m.amount());
	
