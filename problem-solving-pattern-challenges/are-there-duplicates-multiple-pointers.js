function areThereDuplicatesMultiplePointers () {
    if (arguments.length === 0) {
        return false;
    }

    let i = 0;

    for (let j = i + 1; i < arguments.length; j++) {
        if (arguments[i] === arguments[j]) {
            return true;
        } else if (j > arguments.length) {
            i++;
            j = i + 1;
        }
    }

    return false;
}

console.log(areThereDuplicatesMultiplePointers('1', 1));