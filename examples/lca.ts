import { Tree } from "../lib/node/index";

function test<TNode extends { parent: TNode | undefined }>(node1: TNode, node2): void {
	const ancestry1 = Tree.ancestors(node1);
	const ancestry2 = Tree.ancestors(node2);
	const i = Tree.lowestCommonAncestorIndex(ancestry1, ancestry2)

	if (i !== -1) {
		const ancestor = ancestry1[i];

		console.log(`Common ancestor of ${node1} and ${node2} is ${ancestor}`);
	} else {
		console.log(`No common ancestor of ${node1} and ${node2}`);
	}
}

const root = { parent: undefined, toString: () => "root" };
const left = { parent: root, toString: () => "left" };
const leftLeft = { parent: left, toString: () => "leftLeft" };
const leftRight = { parent: left, toString: () => "leftRight" };
const right = { parent: root, toString: () => "right" };
const rightLeft = { parent: right, toString: () => "rightLeft" };
const rightRight = { parent: right, toString: () => "rightRight" };

test(left, right);
test(leftLeft, leftRight);
test(rightLeft, rightRight);
test(leftLeft, rightRight);

