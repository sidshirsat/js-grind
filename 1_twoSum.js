/**
 https://leetcode.com/problems/two-sum/
 * Two Sum - Find indices of two numbers that sum up to the target.
 * @param {number[]} nums - Array of integers.
 * @param {number} target - Target sum.
 * @return {number[]} - Indices of the two numbers.
 */
function twoSum(nums, target) {
    // Create a map to store the complement and index
    const hashMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }

        // Add the current number and its index to the map
        hashMap.set(nums[i], i);
    }

    // Return an empty array if no solution is found (shouldn't happen per problem guarantee)
    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log("Indices:", result); // Output: [0, 1]
