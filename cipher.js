document.querySelector("h1").style.cssText = "color:green; font-size:40px; text-align:centre; font-family:Georgia, serif; "
$("body").css("background-color", "	#FFDAB9");
$("i.fa.fa-key.icon").css({
    'padding': '9px',
    'background': 'green',
    'color': 'white',
    'margin-top': '10px',
    'border- radius': '0.5em',
});

$(".fa").css({
    'border-radius': '0.5em',
    'margin-right': '10px',
})

$(".btn-success").css({
    'margin-right': '30px',
    'margin-bottom': '20px',

})

$(".jumbotron").css({
    'padding': "2rem 1rem",
    'margin-top': '30px',
    'background-color': '#E9EBBB',
    'border-radius': '0.5rem',
})

$(".page-footer").css({
    'font-family': 'cursive',
    'color':'green'
})

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
            .join("");
    };
};



// cipherfunct ("aaa",1);
// export { cipherfunct };


