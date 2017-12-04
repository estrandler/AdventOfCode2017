var fs = require('fs');

fs.readFile("2\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }
    doStuff(data);
});

var doStuff = (input) => {
    var rows = input.split("\r\n"), row, rowVals, maxRow, minRow, checkSum = 0, current, comparison;

    for (var i = 0; i < rows.length; i++) {
        row = rows[i];
        rowVals = row
            .split('\t')
            .map(i => parseInt(i, 10))
            .sort((a, b) => b - a);

        while (true) {
            current = rowVals.shift();
            comparison = rowVals.filter(numb => current % numb === 0)[0];

            if (comparison) {
                checkSum = checkSum + (current / comparison);
                break;
            }
        }
    }

    console.log(checkSum);
}