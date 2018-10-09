//Natives can be used as constructors BUT the output might be different than what you think.

var x = new String( "Hi" );
typeof x; //object not string

x instanceof String; //true

Object.prototype.toString.call(x); // ["Object String"]
console.log(x); //[String: 'Hi']

/**Values that are typeof "object" (such as an array) are additionally tagged with an internal [[Class]] property...and it cant be accessed directly but can be revealed indirectly.**/

Object.prototype.toString.call( [1,2,3] ); // "[object Array]"

Object.prototype.toString.call( /regex-literal/i ); // "[object RegExp]"
