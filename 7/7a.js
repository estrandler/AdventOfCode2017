var fs = require('fs');

fs.readFile("7\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }


    doStuff(data);
});


var doStuff = (data) => {
    const res = data.split('\r\n')
        .filter(line => line.indexOf('->') > -1)
        .filter((line, idx, arr) => {
            var id = line.split(' (')[0];
            return arr.filter(innerLine => innerLine.indexOf(id) > 0).length === 0;
        });

    console.log(res);
}