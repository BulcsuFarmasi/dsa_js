function flatten(array) {
    const flattenedArray = [];

    function innerFlatten(innerArray) {
        if (innerArray.length === 0) {
            return;
        } else {
            if (Array.isArray(innerArray[0])) {
                innerFlatten(innerArray[0]);
            } else {
                flattenedArray.push(innerArray[0]);
            }
            innerFlatten(innerArray.slice(1));
        }
    }

    innerFlatten(array);

    return flattenedArray;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

n

