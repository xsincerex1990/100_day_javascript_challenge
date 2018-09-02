function getAccount(amount) {
    return {
        _amount: amount, 
        get amount() {
            return this._amount
        },
        set amount(val) {
            return this._amount = val
        }
    }
  }
  
  //getAccount(1000)._amount.amount(33)
  
  console.log(typeof(getAccount(1000, 20))); 
  
  console.log(getAccount(_amount=1000, val=23)) 
  
  
  console.log(getAccount.valueOf.__lookupGetter__())
  
  console.log(4 + 5) 


  // Object.defineProperties and Object.defineProperty - data descriptors and accessor descriptors on Computed Property [shorthands]
  

function Person(name) {
    let name = fname; 
    Object.defineProperty(this, 'name', 
    {
        get: getAccount() , {
            if (name === "joel") {
                return 'Bingo'
            }
            return name;
        },
        set: getAccount(n) 
        {
            name = n
        }
    }); 
}
let p = new Person('joel')
console.log(p.name)
p.name = "larry"
console.log(p.name)