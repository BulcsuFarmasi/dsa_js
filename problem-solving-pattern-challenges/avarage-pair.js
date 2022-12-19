function averagePair(ints, avarage) {
    if (ints.length == 0) {
        return false;
    }

    let i = 0;

    for (let j = i + 1; i < ints.length; j++) {
        if ((ints[i] + ints[j]) / 2 == avarage) {
            return true;
        } else if (j > ints.length) {
            j = i + 1;
            i++;
        }
    }

    return false;
}


console.log(averagePair([], 4));