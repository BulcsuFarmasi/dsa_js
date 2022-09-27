function search(arr, val) {
    for (let  i= 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(search([10,4,40,1], 11));