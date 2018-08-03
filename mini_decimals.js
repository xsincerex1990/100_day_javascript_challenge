//side effect of using binary floating-point numbers
//Mathematically, we know that statement should be true. Why is it false?
//the representations for 0.1 and 0.2 in binary floating-point are not exact, so when they are added,
//the result is not exactly 0.3. It's really close: 0.30000000000000004,
//but if your comparison fails, "close" is irrelevant.
//WEIRD SHIT?
0.1 + 0.2 === 0.3; // false
<<<<<<< HEAD
0.4 + 0.5 === 0.9; //true
0.3 + 0.6 === 0.9; //false
=======


 
>>>>>>> 2656a9c180a08b5e4889291d744c067b2e573b4b
