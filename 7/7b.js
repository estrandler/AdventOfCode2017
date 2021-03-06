var fs = require('fs');

fs.readFile("7\\input.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }

    doStuff(data);
});

var getRoot = (arr) => {
    return arr
        .filter(line => line.line.indexOf('->') > -1)
        .filter((line, idx, arr) => {
            return arr.filter(innerLine => innerLine.line.indexOf(line.id) > 0).length === 0;
        })[0];
}

var getChildrenFromNode = (node, rest) => {
    if (node.hasChildren) {
        var children = rest.filter(n => node.children.indexOf(n.id) > -1);

        var childrenWeight = 0;
        children.forEach(child => childrenWeight += child.weight);

        node.isBalanced = childrenWeight == node.weight;
        children.forEach(n => n.level = node.level + 1);
        children.forEach(n => getChildrenFromNode(n, rest));
    } else {
        node.isBalanced = true;
    }

}


var doStuff = (data) => {
    const res = data.split('\r\n')
        .map(line => {
            return {
                id: line.split(' (')[0],
                weight: parseInt(line.substring(line.indexOf('(') + 1, line.indexOf(')')), 10),
                hasChildren: line.indexOf('->') !== -1,
                children: line.indexOf('->') === -1 ? null : line.split('-> ')[1].split(', '),
                line: line
            };
        });

    var root = getRoot(res);
    root.level = 1;
    getChildrenFromNode(root, res);
    var res2 = res.sort((a, b) => b.level - a.level);
    console.log(res2);
}