function is_Hexadecimal_OrNot(text) {
    for (let x of text) {
        console.log(x);
        if ((65 <= x.toUpperCase().charCodeAt()) && (x.toUpperCase().charCodeAt() <= 71)) {
            continue;
        } else if (('0' <= x) && (x <= '9')) {
            continue;
        } else {
            return false
        }
    }
    return true;
};