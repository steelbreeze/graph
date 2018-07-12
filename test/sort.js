const assert = require("assert");
const graph = require('../lib/node/index');

const data = [
	{ name: 'A', requires: ['E', 'B'] },
	{ name: 'B', requires: ['D', 'C'] },
	{ name: 'C', requires: [] },
	{ name: 'D', requires: [] },
	{ name: 'E', requires: [] }
];

const circle = [
	{ name: 'A', requires: ['B'] },
	{ name: 'B', requires: ['C'] },
	{ name: 'C', requires: ['A'] }
];

function dependencies1(i) {
	return data.filter(j => i.requires.indexOf(j.name) !== -1);
}

function dependencies2(i) {
	return circle.filter(j => i.requires.indexOf(j.name) !== -1);
}

describe("test/sort.js", function () {
	it("topological/sort", function () {
		const sorted1 = graph.Sort.topological(data, dependencies1);

		assert.equal('C', sorted1[0].name);
		assert.equal('D', sorted1[1].name);
		assert.equal('B', sorted1[2].name);
		assert.equal('E', sorted1[3].name);
		assert.equal('A', sorted1[4].name);
	});

	it("topological/circular", function () {
		assert.throws(() => {
			const sorted2 = graph.Sort.topological(circle, dependencies2, true);
		}, Error, "Topologicalt sort: circular dependency detected");
	});
});