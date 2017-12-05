var fs = require('fs');

fs.readFile("5\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }


    doStuff(data);
});

var doStuff = (input) => {
    var instructions = input.split("\r\n")
        .map(i => parseInt(i, 10)),
        idx = 0,
        steps = 0,
        current;


    while (true) {
        current = instructions[idx];
        instructions[idx]++;
        idx += current;
        steps++;

        if (instructions[idx] === undefined)
            break;
    }

    console.log('Steps', steps);
}