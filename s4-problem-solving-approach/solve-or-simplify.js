function charCount(str) {
    // make object to return at end
    const result = {};
    // loop over string for each character
    for (let i = 0; i < str.length; i++)  {
        const char = str[i]
        if (result[char] > 0) {
            result[char]++
        } else {
            result[char] = 1
        }
        // if char is a number/letter AND a key in object, add one to count
        // if char is number/letter AND not in object add it to object and set value to 1
        /// if char is something else (space, period, etc.) don't do anything  
    }
    // return object at end
    return result;
}

console.log(charCount("Farmasi"))