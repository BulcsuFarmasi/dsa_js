function maxSubarraySum(ints, subarrayLength) {


    if (subarrayLength > ints.length) {
        return null;
    }

    let maxSubarraySum = 0;
    let currentSubarraySum = 0;

    for (let i = 0; i < ints.length; i++) {
        currentSubarraySum += ints[i];

        if (i -subarrayLength >= 0) {
            currentSubarraySum -= ints[i - subarrayLength];
        }

        if (currentSubarraySum > maxSubarraySum) {
            maxSubarraySum = currentSubarraySum;
        }
        
    }

    return maxSubarraySum;s
}

console.log(maxSubarraySum([2,3,9,4,5], 3));