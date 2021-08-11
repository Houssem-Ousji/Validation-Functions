function is_Alpha_Numeric_OrNot(text) {
    for (let x of text) {
        if ((65 <= x.toUpperCase().charCodeAt()) && (x.toUpperCase().charCodeAt() <= 90)) {
            continue;
        } else if ((0 <= x) && (x <= 9)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};