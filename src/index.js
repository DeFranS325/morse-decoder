const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let substr = [];
    let s;
    let res = '';
    for (let i = 0; i < expr.length / 10; i++)
        substr.push(expr.substr(10 * i, 10));

    for (let el of substr) {
        if (el == '**********')
            res += ' ';
        else {
            s = '';
            for (let i = 0; i < el.length / 2; i++) {
                if (el.substr(2 * i, 2) == '10')
                    s += '.';
                if (el.substr(2 * i, 2) == '11')
                    s += '-';
            }
            for (let key in MORSE_TABLE)
                if (s == key) {
                    res += MORSE_TABLE[key];
                }
        }
    }
    return res;
}

module.exports = {
    decode
}