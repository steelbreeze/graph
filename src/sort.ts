/**
 * @module sort
 * 
 * A small library of sorting algorithms.
 * 
 * @copyright (c) 2018 David Mesquita-Morris
 * 
 * Licensed under the MIT licence
 */

export namespace Sort {
	/**
	 * Sorts an array of items based on a function that derives dependencies such that each item in the sorted array precedes its dependencies.
	 * @param source The source array to sort.
	 * @param dependencies A function that takes an item in the source array and returns the other members of the source array that the item depends upon.
	 * @param throwOnCircularDependency A flag that if set will throw an exception if a circular dependency is detected.
	 * @returns Returns a sorted copy of the source array.
	 */
	export function topological<T>(source: Array<T>, dependencies: (item: T) => Array<T>, throwOnCircularDependency: boolean = false): Array<T> {
		var sorted = new Array<T>();
		var visited = new Array<T>();

		function visit(item: T): void {
			if (visited.indexOf(item) === -1) {
				visited.push(item);

				dependencies(item).forEach(visit);

				sorted.push(item);
			} else {
				if (throwOnCircularDependency && sorted.indexOf(item) === -1) {
					throw new Error('Topological sort: circular dependency detected');
				}
			}
		}

		source.forEach(visit);

		return sorted;
	}
}