const assert = require("assert");
const graph = require('../lib/node/index');

const data = [
	{ name: 'A', requires: ['E', 'B'], toString: () => 'A' },
	{ name: 'B', requires: ['D', 'C'], toString: () => 'B' },
	{ name: 'C', requires: [], toString: () => 'C' },
	{ name: 'D', requires: [], toString: () => 'D' },
	{ name: 'E', requires: [], toString: () => 'E' }
];

function dependencies(i) {
	return data.filter(j => i.requires.indexOf(j.name) !== -1);
}

describe("test/sort.js", function () {
	it("topological", function () {
		const sorted = graph.Sort.topological(data, dependencies, true);

		assert.equal('C', sorted[0].name);
		assert.equal('D', sorted[1].name);
		assert.equal('B', sorted[2].name);
		assert.equal('E', sorted[3].name);
		assert.equal('A', sorted[4].name);
	});
});