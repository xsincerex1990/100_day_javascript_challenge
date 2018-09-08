//Outputs the balance of your cardano wallet

require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('https://cardanoexplorer.com/api/addresses/summary/place_address_here')

.then (function(response) {
    return response.json();
})
.then(function(myJson) {
    console.log(JSON.stringify(myJson.Right.caBalance.getCoin / 1000000));
});

