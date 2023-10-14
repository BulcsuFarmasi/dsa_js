function productOfArray(numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers[0] * productOfArray(numbers.splice(1)); 
}

console.log(productOfArray([9,7,40]));