function ls(sen) {
    let fixed_arr = sen.match(/[a-z0-9]+/gi).sort(function(a, b) {
        return b.length - a.length
    })
    
    return console.log(fixed_arr[0])
};
ls("this a test sentence bish!!!;;")
    

