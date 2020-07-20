
function cipherfunct(str, val) {
    console.log("orig str: ", str);
    str = str.toUpperCase(str);
    console.log("changed str: ", str);
    console.log("value: ", val);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
        .split("")
        .map(char => {
            const pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(parseInt(pos) + parseInt(val)) % 26] : char;
        })
        .join("");
};
cipherfunct("aaa", 1);
export { cipherfunct };
