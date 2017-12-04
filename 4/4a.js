var fs = require('fs');

fs.readFile("4\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }

    
    doStuff(data);
});

var doStuff = (input) => {
    var rows = input.split("\r\n"), row, rowVals, current, count = 0, isValid = true;

    for (var i = 0; i < rows.length; i++) {
        row = rows[i];
        rowVals = row.split(' ');

        while (rowVals.length > 1) {
            current = rowVals.pop();
            if(rowVals.indexOf(current) > -1){
                isValid = false;
                break;
            }
        }

        count = isValid ? count + 1 : count;
        isValid = true;
    }

    console.log('Count', count);
}