function linear_search(arr, target){
    for(let i = 0;  i < arr.length; i++){
        if(arr[i] === target){
        return i;
        }
    }
    return -1;
}
console.log(linear_search([1, 2, 3, 4, 5], 3)); // should return 2 (index of target)
