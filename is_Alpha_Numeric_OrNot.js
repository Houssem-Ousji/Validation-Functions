function is_Alpha_Numeric_OrNot(text) {
    var test = true
    for (let x of text) {
        if ((65 <= x.toUpperCase().charCodeAt()) && (x.toUpperCase().charCodeAt() <= 90)) {
            test = true;
        } else if ((0 <= x) && (x <= 9)) {
            test = true;
        } else {
            return false
        }
    }
    return true;
};