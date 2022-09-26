function countUniqueValues(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 0; j < array.length; j++) {
        if (array[i] !== array[j]) {
            array[i] = array[j];
            i++;
        }
    }

    return i + 1;
}

console.log(countUniqueValues([-2, -2, -1, 0, 1]));