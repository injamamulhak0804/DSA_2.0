function insertionSort(nums) {
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        let curr = nums[i];
        let prev = i - 1;
        while (nums[prev] > curr && prev >= 0) {
            nums[prev + 1] = nums[prev];
            prev--
        }
        nums[prev + 1] = curr
    }
    return nums
}

const arr = [6, 5, 2, 1, 4]
console.log(insertionSort(arr));