
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
                return pos >= 0 ? alphabet[(parseInt(pos) + parseInt(val)) % 26] : char;
            })
            .join("");
    };
};





// cipherfunct ("aaa",1);
// export { cipherfunct };


