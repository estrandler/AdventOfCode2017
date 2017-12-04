var fs = require('fs');

fs.readFile("2\\input.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doStuff(data);
});

var doStuff = (input) => {
    var rows = input.split("\r\n"), row, rowVals, maxRow, minRow, checkSum = 0;

    for(var i = 0; i < rows.length; i++) {
        row = rows[i];
        rowVals = row.split('\t');
        maxRow = Math.max(...rowVals);
        minRow = Math.min(...rowVals);
        checkSum = checkSum + maxRow - minRow;
    }

    console.log(checkSum);
}