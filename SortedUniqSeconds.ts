/**
 * Please write code to change seconds_batches to be sorted_uniq_seconds in simplest way in Javascript
 */

export function SortedUniqSeconds(arrs: number[][]): number[] {
    // Create a Set to store the unique seconds
    const unSorted_uniq_seconds = new Set<number>();
    // Loop through the array of arrays
    arrs.forEach((arr) => {
        arr.forEach((num) => {
            unSorted_uniq_seconds.add(num);
        });
    });
    // Convert the Set to an array and sort it
    const sortedArray = Array.from(unSorted_uniq_seconds).sort((a, b) => a - b);
    return sortedArray;
}
