/// Can you check your result?
/// Can you derive the result differently?
/// Can you understand it at a glance?
/// Can you use the result or method for some other problem?
/// Can you improve the performance of your solution?
/// Can you think of other ways to refactor?
/// How other people solved this problem?

function charCount(str) {
    // make object to return at end
    const result = {};
    // loop over string for each character
    for (let char of str.toLowerCase()) {
        if (isAlphanumeric(char))
            result[char] =(result[char] || 0) + 1;
        // if char is a number/letter AND a key in object, add one to count
        // if char is number/letter AND not in object add it to object and set value to 1
        /// if char is something else (space, period, etc.) don't do anything  
    }
    // return object at end
    return result;
}

function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

console.log(charCount("Julian McMahon"))