"use strict";
/**
 * @module tree
 *
 * A small library of sorting algorithms.
 *
 * @copyright (c) 2018 David Mesquita-Morris
 *
 * Licensed under the MIT licence
 */
Object.defineProperty(exports, "__esModule", { value: true });
function visit(item, visited, sorted, dependencies, throwOnCircularDependency) {
    if (visited.indexOf(item) === -1) {
        visited.push(item);
        for (var _i = 0, _a = dependencies(item); _i < _a.length; _i++) {
            var dependency = _a[_i];
            visit(dependency, visited, sorted, dependencies, throwOnCircularDependency);
        }
        sorted.push(item);
    }
    else {
        if (throwOnCircularDependency && sorted.indexOf(item) === -1) {
            throw new Error('Topologicalt sort: circular dependency detected');
        }
    }
}
var Sort;
(function (Sort) {
    /**
     * Sorts an array of items based on a function that derives dependencies such that each item in the sorted array precedes its dependencies.
     * @param source The source array to sort.
     * @param dependencies A function that takes an item in the source array and returns the other members of the source array that the item depends upon.
     * @param throwOnCircularDependency A flag that if set will throw an exception if a circular dependency is detected.
     * @returns Returns a sorted copy of the source array.
     */
    function topological(source, dependencies, throwOnCircularDependency) {
        if (throwOnCircularDependency === void 0) { throwOnCircularDependency = false; }
        var sorted = new Array();
        var visited = new Array();
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            visit(item, visited, sorted, dependencies, throwOnCircularDependency);
        }
        return sorted;
    }
    Sort.topological = topological;
})(Sort = exports.Sort || (exports.Sort = {}));
