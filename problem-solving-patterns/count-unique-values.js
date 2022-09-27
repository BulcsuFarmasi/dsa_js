function countUniqueValues(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));