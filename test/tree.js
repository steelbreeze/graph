/* global describe, it */
var assert = require("assert"),
	graph = require("../lib/node/index");

var root = { name: "root" };
var left = { name: "left", parent: root };
var right = { name: "right", parent: root };
var rightLeft = { name: "rightLeft", parent: right };
var rightRight = { name: "rightRight", parent: right };
var other = { name: "other" };

describe("test/tree.js", function () {
	it("depth", function () {
		assert.equal(0, graph.Tree.depth(root));
		assert.equal(1, graph.Tree.depth(left));
		assert.equal(1, graph.Tree.depth(right));
		assert.equal(2, graph.Tree.depth(rightLeft));
		assert.equal(2, graph.Tree.depth(rightRight));
		assert.equal(0, graph.Tree.depth(other));
	});

	it("ancestors", function () {
		assert.equal(1, graph.Tree.ancestors(root).length);
		assert.equal(2, graph.Tree.ancestors(left).length);
		assert.equal(2, graph.Tree.ancestors(right).length);
		assert.equal(3, graph.Tree.ancestors(rightLeft).length);
		assert.equal(3, graph.Tree.ancestors(rightRight).length);
		assert.equal(1, graph.Tree.ancestors(other).length);
	});

	it("Common ancestor", function () {
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(root)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(left)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(right)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(rightLeft)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(rightRight)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(root), graph.Tree.ancestors(other)));

		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(root)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(left)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(right)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(rightLeft)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(rightRight)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(left), graph.Tree.ancestors(other)));

		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(root)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(left)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(right)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(rightLeft)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(rightRight)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(right), graph.Tree.ancestors(other)));

		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(root)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(left)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(right)));
		assert.equal(2, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(rightLeft)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(rightRight)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightLeft), graph.Tree.ancestors(other)));

		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(root)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(left)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(right)));
		assert.equal(1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(rightLeft)));
		assert.equal(2, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(rightRight)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(rightRight), graph.Tree.ancestors(other)));

		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(root)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(left)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(right)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(rightLeft)));
		assert.equal(-1, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(rightRight)));
		assert.equal(0, graph.Tree.lowestCommonAncestorIndex(graph.Tree.ancestors(other), graph.Tree.ancestors(other)));
	});

	it("isChild", function () {
		assert.equal(false, graph.Tree.isChild(root, root));
		assert.equal(true, graph.Tree.isChild(left, root));
		assert.equal(true, graph.Tree.isChild(rightLeft, root));
		assert.equal(true, graph.Tree.isChild(rightRight, root));
		assert.equal(false, graph.Tree.isChild(other, root));

		assert.equal(false, graph.Tree.isChild(rightLeft, left));
		assert.equal(true, graph.Tree.isChild(rightLeft, right));
	});
});

