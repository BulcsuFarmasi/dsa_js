function areThereDuplicatesFrequencyCounter() {
    if (arguments.length === 0) {
        return false;
    }

    const valueFrequencies = {};

    for (let argument of arguments) {
        valueFrequencies[argument] = (valueFrequencies[argument] || 0) + 1
    }

    for (let key in valueFrequencies) {
        console.log(valueFrequencies[key]);
        if (valueFrequencies[key] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicatesFrequencyCounter());