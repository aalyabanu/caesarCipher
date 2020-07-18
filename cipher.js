function cipherfunct(str, val) {
    console.log("orig str: ",str );
    str = str.toUpperCase(str);
    console.log("changed str: ", str);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
        .split("")
        .map(char => {
            const pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(pos + val) % 26] : char;
            return String.fromCharCode(str.charCodeAt() + val % 26);
        })
        .join("");
};
cipherfunct ("aaa",1);
export { cipherfunct };


