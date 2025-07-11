function BubbleSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    return nums
}


const arr = [6, 5, 2, 1, 4]
console.log(BubbleSort(arr));