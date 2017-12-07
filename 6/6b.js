var input = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5],
    isDoubleDetected = false,
    counter = 0,
    usedArrs = [];

var getIndexWithHighestValue = (val) => {
    val = val || Math.max(...input), indexes = [], i = -1;
    while ((i = input.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }

    return Math.min(...indexes);
}

var distributeValues = () => {

    var highestValueIndex = getIndexWithHighestValue(),
        highestValue = input[highestValueIndex],
        nextIdx = highestValueIndex + 1;

    input[highestValueIndex] = 0;

    for (var i = 0; i < highestValue; i++) {

        if (nextIdx >= input.length) {
            nextIdx = 0;
        }

        input[nextIdx]++;
        nextIdx++;

    }

}

var pushCurrentArr = () => {
    usedArrs.push(input.join(','));
}

var checkIfExists = () => {
    return usedArrs.indexOf(input.join(',')) !== -1;
}

while (!isDoubleDetected) {
    counter++;

    distributeValues();
    isDoubleDetected = checkIfExists();

    if (isDoubleDetected)
        console.log(counter - 1 - usedArrs.indexOf(input.join(',')));

    pushCurrentArr();
}


console.log(counter);