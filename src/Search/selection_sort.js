function SelectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) min = j;
        }
        let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
    return nums
}

const arr = [6, 5, 2, 1, 4]
console.log(SelectionSort(arr));