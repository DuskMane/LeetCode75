//724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = 0;
    let leftSum = 0;
    nums.forEach(num => rightSum += num)
    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];

        if(rightSum == leftSum){
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};