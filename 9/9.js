var fs = require('fs');

fs.readFile("9\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }


    doStuff(data);
});

let doStuff = (inp) => {
    let garbage = false,
        score = 0,
        depth = 1,
        garbageCount = 0;

    for (var i = 0; i < inp.length; i++) {
        var c = inp[i];

        if (c == '!')
            i++;
        else if (garbage && c != '>')
            garbageCount++
        else if (c == '<')
            garbage = true;
        else if (c == '>')
            garbage = false;
        else if (c == '{')
            score += depth++;
        else if (c == '}')
            depth--;
    }

    console.log('Score', score);
    console.log('GarbageCount', garbageCount);
}

