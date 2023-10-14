function reverse(string) {
    let reversed = "";

    function recurse(string) {
        if (string.length === 0) {
            return;
        }

        reversed += string.substring(string.length - 1);

        recurse(string.substring(0, string.length - 1));
    }

    recurse(string);

    return reversed;
}

console.log(reverse('Farmasi Bulcsú'));