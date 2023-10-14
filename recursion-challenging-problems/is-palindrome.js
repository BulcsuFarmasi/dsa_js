function isPalindrom(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] !== string[string.length - 1]) {
        return false;
    }

    return isPalindrom(string.substring(1, string.length - 1));
}

console.log(isPalindrom('foobar'));