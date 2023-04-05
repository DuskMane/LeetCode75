// 1480. Running Sum of 1d Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumArr = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        sumArr.push(sumArr[i-1]+nums[i]);
    }
    
    return sumArr;
};