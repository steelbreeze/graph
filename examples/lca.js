"use strict";
exports.__esModule = true;
var graph_1 = require("@steelbreeze/graph");
function test(node1, node2) {
    var ancestry1 = graph_1.Tree.ancestors(node1);
    var ancestry2 = graph_1.Tree.ancestors(node2);
    var i = graph_1.Tree.lowestCommonAncestorIndex(ancestry1, ancestry2);
    if (i !== -1) {
        var ancestor = ancestry1[i];
        console.log("Common ancestor of " + node1 + " and " + node2 + " is " + ancestor);
    }
    else {
        console.log("No common ancestor of " + node1 + " and " + node2);
    }
}
var root = { parent: undefined, toString: function () { return "root"; } };
var left = { parent: root, toString: function () { return "left"; } };
var leftLeft = { parent: left, toString: function () { return "leftLeft"; } };
var leftRight = { parent: left, toString: function () { return "leftRight"; } };
var right = { parent: root, toString: function () { return "right"; } };
var rightLeft = { parent: right, toString: function () { return "rightLeft"; } };
var rightRight = { parent: right, toString: function () { return "rightRight"; } };
test(left, right);
test(leftLeft, leftRight);
test(rightLeft, rightRight);
test(leftLeft, rightRight);
