function sameFrequency(number, otherNumber) {

    checkNumberValidity(number);
    checkNumberValidity(otherNumber);

    const numberFrequencies = calculateNumberFrequencies(number);
    const otherNumberFrequencies = calculateNumberFrequencies(otherNumber);
    
    for(let numberFrequency in numberFrequencies) {
        if (!otherNumberFrequencies[numberFrequency] || otherNumberFrequencies[numberFrequency] != numberFrequencies[numberFrequency]) {
            return false;
        }
    }

    return true;
}

function checkNumberValidity(number) {
    if (!Number.isInteger(number) || number <= 0) {
        throw 'Number should be positive integer'
    }
}

function calculateNumberFrequencies(number) {
    const numberFrequencies = {};

    while(number > 0) {
        const currentDigit = number % 10;
        numberFrequencies[currentDigit] = (numberFrequencies[currentDigit] || 0) + 1;
        number = Math.floor(number / 10);
    }

    return numberFrequencies;
}

console.log(sameFrequency(3455,5453));
