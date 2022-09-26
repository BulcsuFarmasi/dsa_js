function countUniqueValues(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }

    let countOfUniqueValues = 1;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i + 1]) {
            countOfUniqueValues++;
        }
    }

    return countOfUniqueValues;
}

console.log(countUniqueValues([-2,-2,-1,0,1]));