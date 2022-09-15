function charCount(str) {
    const result = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCount("Twelve o'Clock"));