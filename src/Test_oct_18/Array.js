
// Do it Again 🔄️
function RemoveDuplicates(arr) {
    let x = 0;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] != arr[x]) {
            x++
            arr[x] = arr[i]
        }
    }

    return x + 1
}
// console.log(RemoveDuplicates([1, 2, 3, 3, 4, 5, 5, 6, 7, 7]))


function RemoveElement(arr, val) {
    let x = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] == val) {
            x = i
            break
        }
    }

    for (let i = x; i < n; i++) {
        if (arr[i] != val) {
            arr[x] = arr[i];
            x++
        }
    }

    return [x, arr]

}
// console.log(RemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 2));



// 1.Brute 
function ReverseStringBrute(str) {
    return str.reverse()
}
// console.log(ReverseString(["h", "e", "l", "l", "o"]))

// 2.Better 
function ReverseString(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= Math.floor(n / 2); i--) {
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    return arr
}
// console.log("reversed array: ", ReverseString(["h", "e", "l", "l", "o"]))

// 4.optimal
function ReverseStringOptimal(arr) {
    let n = arr.length;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp
    }
    return arr
}
// console.log(ReverseStringOptimal(["h", "e", "l", "l", "o"]))

function MaxProfit(arr) {
    let buy = arr[0];
    let MaxProfit = 0

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < buy) {
            buy = arr[i]
        }
        MaxProfit = Math.max(MaxProfit, arr[i] - buy)
    }

    return MaxProfit;
}
// console.log(MaxProfit([7, 1, 5, 3, 6, 4]))

// Do it Again 🔄️
function MergeSortedArray(arr1, arr2, m, n) {
    if (arr2.length <= 1) return arr1;
    let arr1Copy = arr1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1Copy[p1] < arr2[p2] | p2 >= arr1Copy.length) {
            arr1[i] = arr1Copy[p1]
            p1++
        } else {
            arr1[i] = arr2[p2]
            p2++
        }
    }
    return arr1
}
// console.log(MergeSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3))
// console.log(MergeSortedArray([1], [], 1, 0))

function MergeSortedArray(arr1, arr2, m, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (arr1[p1] > arr2[p2] && p1 >= 0) {
            arr1[i] = arr1[p1]
            p1--
        } else {
            arr1[i] = arr2[p2];
            p2--
        }
    }
    return arr1
}
console.log(MergeSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3))
// console.log(MergeSortedArray([1], [], 1, 0))