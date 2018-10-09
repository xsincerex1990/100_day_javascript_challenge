// make a function that takes two strings and removes all matching characters
let oa;
let a1;
let a2;
let x = [];
function longest(s1, s2) {
   a1 = s1.split('');
   a2 = s2.split('');
   oa = a1.concat(a2);
   oa.sort();
    
   for (var i = 0; i < oa.length; i++) {
       if (oa[i] !== oa[i+1]) {
           x.push(oa[i])
       }
   }
   return x.join('');
}
    
console.log(longest("uihsihshushdghdylx", "akubviaubiubsub")) // abdghiklsuvxyv
