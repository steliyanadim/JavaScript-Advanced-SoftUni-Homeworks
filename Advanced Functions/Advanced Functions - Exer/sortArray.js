function solve(nums, order) {
return order === 'asc' ? nums.sort((a,b) => a-b) : nums.sort((a,b) => b-a)
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));
solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')