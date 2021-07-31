function is_American_Express(value) {
    var string_value = value.toString();
    if ((string_value.slice(0, 2) == 34 || string_value.slice(0, 2) == 37) && (string_value.length == 15)) {
        return true;
    } else {
        return false;
    }
};

function is_Visa(value) {
    var string_value = value.toString();
    if ((string_value[0] == 4) && (string_value.length == 13 || string_value.length == 16)) {
        return true;
    } else {
        return false;
    }

};

function is_Discover(value) {
    var string_value = value.toString();
    if ((string_value.slice(0, 4) == 6011) && (string_value.length == 16)) {
        return true;
    } else if ((string_value[0] == 5) && (string_value.length == 15)) {
        return true;
    } else {
        return false;
    }
};

function is_MasterCard(value) {
    var string_value = value.toString();
    if ((parseInt(string_value.slice(0, 2)) >= 51) && (parseInt(string_value.slice(0, 2)) <= 55) && (string_value.length == 16)) {
        return true;

    } else {
        return false;
    }
};

function is_Dinners_Club(value) {
    var string_value = value.toString();
    if (((parseInt(string_value.slice(0, 3)) >= 300) && (parseInt(string_value.slice(0, 3)) <= 305)) || (parseInt(string_value.slice(0, 2)) == 36) || (parseInt(string_value.slice(0, 2)) == 38)) {
        if (string_value.length == 14) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function is_jcb(value) {
    var string_value = value.toString();
    if (((parseInt(string_value.slice(0, 4)) == 2131) || (parseInt(string_value.slice(0, 4)) == 1800)) && (string_value.length == 15)) {
        return true;
    } else if ((parseInt(string_value.slice(0, 2)) == 35) && (string_value.length == 16)) {
        return true;
    } else {
        return false;
    }
};