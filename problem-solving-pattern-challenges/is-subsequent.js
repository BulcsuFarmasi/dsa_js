function isSubsequence(search, containing) {
    if (search.length == 0 || containing.length == 0) {
        return false;
    }

    let searchPointer = 0;

    for(let i = 0; i < containing.length; i++) {
        if (containing[i] === search[searchPointer]) {
            searchPointer++;
        }
    }

    return searchPointer === search.length;

}


console.log(isSubsequence('cad', 'acdor')); 