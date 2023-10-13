function factorialIterative(num) {
    let factorial = 1;
    for (let i = num; i > 1; i--) {
        factorial *= num;
    }

    return factorial;
}

console.log(factorialIterative(20));