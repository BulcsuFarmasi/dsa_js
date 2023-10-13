function minSubarrayLength(ints, sum) {


    let i = 0;
    let j = 0;
    let subArraySum = 0;
    let minSubarrayLength;

    while(i <= ints.length) {
        if (subArraySum < sum) {
            subArraySum += ints[i];
            i++
        } else {
            let length = i - j;
            if (!minSubarrayLength || length < minSubarrayLength) {
                minSubarrayLength = length;
            }
            j++
            subArraySum -= ints[j];

            if (subArraySum < sum) {
                j = i;
                subArraySum = 0;
            }

        }
    }

    return minSubarrayLength || 0;

    
}

console.log(minSubarrayLength([1,4,16,22,5,7,8,9,10],95));

//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0