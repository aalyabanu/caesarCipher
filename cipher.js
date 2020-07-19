
function runCipher() {
    let userString = document.getElementById("userMessage").value;
    let userKey = document.getElementById("userKey").value
    let resultText = [];
    let encode = document.getElementById("encode");
    let decode = document.getElementById("decode");


    encode.onclick = function () {
        resultText = cipherfunct(userString, userKey);
        document.getElementById("result").value = resultText;
    }

    decode.onclick = function () {
        resultText = cipherfunct(userString, -userKey);
        document.getElementById("result").value = resultText;
    }


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
                if (val >= 0) {
                    return pos >= 0 ? alphabet[(parseInt(pos) + parseInt(val)) % 26] : char;
                } else {
                    const newpos = parseInt(pos) + parseInt(val);
                    if (alphabet.includes(char)) {
                        return newpos >= 0 ? alphabet[newpos] : alphabet[alphabet.length + (newpos % 26)];
                    } else {
                        return char;
                    }
                }

            })
            // .map(char => {
            //     const pos = alphabet.indexOf(char);
            //     return pos >= 0 ? alphabet[(parseInt(pos) + parseInt(val)) % 26] : char;
            // })
            .join("");
    };
};





// cipherfunct ("aaa",1);
// export { cipherfunct };


