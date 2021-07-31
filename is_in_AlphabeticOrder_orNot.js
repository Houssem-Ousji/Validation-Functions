function is_in_AlphabeticOrder_orNot(text) {
    opposite_text = text.split('').sort().join('');
    console.log(opposite_text);
    if (opposite_text == text) { return true } else { return false }
};