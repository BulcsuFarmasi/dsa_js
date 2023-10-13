function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));

    return newArr;
}

console.log(collectOddValuesPure([1,10,9,101,11,12,33,40]));