function MergeSort(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = MergeSort(nums.slice(0, mid));
    let right = MergeSort(nums.slice(mid));
    return MergeSortArray(left, right)
}

function MergeSortArray(left, right) {
    let i = 0;
    let j = 0;
    let res = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++
        } else {
            res.push(right[j]);
            j++
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]
}

const arr = [6, 5, 2, 1, 4]
console.log(MergeSort(arr));