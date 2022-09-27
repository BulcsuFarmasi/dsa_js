function sameFrequency(number, otherNumber) {
    
    if (!Number.isInteger(number) || number <= 0) {
        throw 'Number should be positive integer'
    }

    if (!Number.isInteger(otherNumber) || otherNumber <= 0) {
        throw 'Other number should be positve integer';
    }

    const numberFrequencies = {};

    while(number > 0) {
        const currentDigit = number % 10;
        if (numberFrequencies[currentDigit] > 0) {
            numberFrequencies[currentDigit]++;
        } else {
            numberFrequencies[currentDigit] = 1;
        }
        number = Math.floor(number / 10);
    }

    const otherNumberFrequencies = {};
    while(otherNumber > 0) {
        const currentDigit = otherNumber % 10;
        if (otherNumberFrequencies[currentDigit] > 0) {
            otherNumberFrequencies[currentDigit]++;
        } else {
            otherNumberFrequencies[currentDigit] = 1;
        }
        otherNumber = Math.floor(otherNumber / 10);
    }

    
        for(let numberFrequency in numberFrequencies) {
            if (!otherNumberFrequencies[numberFrequency] || otherNumberFrequencies[numberFrequency] != numberFrequencies[numberFrequency]) {
                return false;
            }
        }
    return true;

}

console.log(sameFrequency(3455,5345));
