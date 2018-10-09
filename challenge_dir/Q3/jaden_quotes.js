let a;
let na;

function jaden(str) {
    a = str.split(' ');
    na = [];
    for (let i = 0; i < a.length; ++i) {
        na.push(a[i].charAt(0).toUpperCase()+a[i].slice(1))
    }

    return console.log(na.join(' '))
}

jaden("jaden smith types his philosophies like this string lol");


