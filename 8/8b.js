var fs = require('fs');

fs.readFile("8\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }


    doStuff(data);
});

var expressions = {
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b,
    '==': (a, b) => a == b,
    '!=': (a, b) => a != b,
    'inc': (a, b) => a += b,
    'dec': (a, b) => a -= b
};

var doStuff = (data) => {
    var keyValPairs = {};
    var maxOfAllTime = 0;

    data.split('\r\n').forEach(line => {
        keyValPairs[line.split(' ')[0]] = 0;
        keyValPairs[line.split(' ')[4]] = 0;
    });

    const res = data.split('\r\n').map(line => {
        var lineAsArray = line.split(' ');
        return {
            target: lineAsArray[0],
            operator: lineAsArray[1],
            value: parseInt(lineAsArray[2]),
            expression: {
                a: lineAsArray[4],
                b: parseInt(lineAsArray[6], 10),
                eval: lineAsArray[5]
            }
        }
    })
        .forEach(exp => {
            var a = keyValPairs[exp.expression.a];
            if (expressions[exp.expression.eval](a, exp.expression.b)){
                keyValPairs[exp.target] = expressions[exp.operator](keyValPairs[exp.target], exp.value);
                maxOfAllTime = Math.max(keyValPairs[exp.target], maxOfAllTime);
            }
        });
        var result = Math.max(...Object.keys(keyValPairs).map(key =>  keyValPairs[key]));

        console.log(result);
        console.log('Max', maxOfAllTime);



}