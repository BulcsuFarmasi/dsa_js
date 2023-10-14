function fib(nth) {
    if (nth <= 0) {
        return 0;
    }

    if (nth === 1) {
        return 1;
    }

    return fib(nth - 2) + fib(nth - 1);
}

console.log(fib(10))