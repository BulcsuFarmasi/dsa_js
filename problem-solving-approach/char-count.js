function charCount(str) {
    const result = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && 
        !(code > 64  && code < 91) && 
        !(code > 96 && code < 123)) {
            return false;
        }
    return true;
}

console.log(charCount("Twelve o'Clock"));