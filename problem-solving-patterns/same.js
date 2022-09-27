function same(array, squaredArray) {
    // check if they are both arrays and contain number
    if (!Array.isArray(array) || !Array.isArray(squaredArray)) {
        throw "Both parameters need to be an array"
    }
    for (let element of array) {
        if (typeof element != "number") {
            throw "Elements of array need to numbers"
        }
    }
    for (let element of squaredArray) {
        if (typeof element != "number") {
            throw "Elements of array need to numbers"
        }
    }

    if (array.length != squaredArray.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of array) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of squaredArray) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2 !== frequencyCounter1[key]]) {
            return false;
        }

    }

    return true;

}

console.log(same([1,2,3,4],[4,9,16,16]));