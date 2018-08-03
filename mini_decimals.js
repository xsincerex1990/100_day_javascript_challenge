//side effect of using binary floating-point numbers
//Mathematically, we know that statement should be true. Why is it false?
//the representations for 0.1 and 0.2 in binary floating-point are not exact, so when they are added,
//the result is not exactly 0.3. It's really close: 0.30000000000000004,
//but if your comparison fails, "close" is irrelevant.
0.1 + 0.2 === 0.3; // false


 
