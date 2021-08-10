function is_Ip_Adress_OrNot(text) {
    var array_text = text.split('.');
    if (!(array_text.length == 4)) {
        return false;
    }
    for (let x of array_text) {
        if (!((0 <= x) && (x <= 255))) {
            return false;
        }
    }
    return true;

};