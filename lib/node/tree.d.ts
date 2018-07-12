/**
 * @module tree
 *
 * A small library of tree algorithms.
 *
 * @copyright (c) 2017 David Mesquita-Morris
 *
 * Licensed under the MIT licence
 */
export declare namespace Tree {
    /**
     * Returns the ancestry of a node within a tree from the root as an array.
     * @param TNode A common type shared by all node instances within the tree.
     * @param node The node to return the ancestry for.
     */
    function ancestors<TNode extends {
        parent: any;
    }>(node: TNode): Array<TNode>;
    /**
     * Returns the index of the lowest/least common ancestor given a pair of ancestrys.
     * @param TNode A common type shared by all node instances within the tree.
     * @param ancestry1 The ancestry of a node within the tree.
     * @param ancestry2 The ancestry of a node within the tree.
     * @returns The index of the lowest/least common ancestor or -1 if the nodes do not share any ancestry.
     */
    function lowestCommonAncestorIndex<TNode>(ancestry1: Array<TNode>, ancestry2: Array<TNode>): number;
    /**
     * Tests a node to see if it is in the ancestry of another node.
     * @param TNode A common type shared by all node instances within the tree.
     * @param child The possible child node.
     * @param parent The parent node.
     */
    function isChild<TNode extends {
        parent: any;
    }>(child: TNode, parent: TNode): boolean;
    /**
     * Returns the depth (number of edges from a node to the root) of a node.
     * @param TNode A common type shared by all node instances within the tree.
     * @param child The node to get the depth of.
     * @returns The number of edges between the node an the root node. Returns -1 an undefined node is passed.
     */
    function depth<TNode extends {
        parent: any;
    }>(node: TNode): number;
}
