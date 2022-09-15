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
    let frequenciesMatch = true;
    for (let element of array) {
        let arrayFrequency = 0;
        for (let countElement of array) {
            if (element === countElement) {
                arrayFrequency++;
            }
        }
        let squaredArrayFrequency = 0;
        for (let squaredCountElement of squaredArray) {
            if (squaredCountElement === element ** 2) {
                squaredArrayFrequency++;
            }
        }
        if (arrayFrequency !== squaredArrayFrequency) {
            frequenciesMatch = false;
            break;
        }
    }
    return frequenciesMatch;

}

console.log(same([1,2,3,4,1],[4,9,1,16,1]));