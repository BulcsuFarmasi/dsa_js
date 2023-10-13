function findLongestSubstring(letters) {
    if (!letters) {
        return 0;
    }


    let longestSubString = 0;
    let start = 0;
    let end = 0;
    let lettersSet = new Set();

    while (start < letters.length) {

        if (end == letters.length || lettersSet.has(letters[end])) {
            const length = end - start;
            longestSubString = (length > longestSubString) ? length : longestSubString;
            lettersSet.clear();
            start++;
            end = start;
        } else {
            lettersSet.add(letters[end]);
            end++;
        }
    }

    return longestSubString;

}

console.log(findLongestSubstring('thisisawesome')); // 7