/**
 * @module tree
 *
 * A small library of sorting algorithms.
 *
 * @copyright (c) 2018 David Mesquita-Morris
 *
 * Licensed under the MIT licence
 */
export declare namespace Sort {
    /**
     * Sorts an array of items based on a function that derives dependencies such that each item in the sorted array precedes its dependencies.
     * @param source The source array to sort.
     * @param dependencies A function that takes an item in the source array and returns the other members of the source array that the item depends upon.
     * @param throwOnCircularDependency A flag that if set will throw an exception if a circular dependency is detected.
     * @returns Returns a sorted copy of the source array.
     */
    function topological<T>(source: Array<T>, dependencies: (item: T) => Array<T>, throwOnCircularDependency?: boolean): Array<T>;
}
