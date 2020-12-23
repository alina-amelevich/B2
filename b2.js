'use strict'

function invertFunc(stringValue) {
return stringValue.split('').reverse().join('');
}

function runB2() {
    let userString = prompt('Введите строку').trim();
    let invertedString = invertFunc(userString);
    alert(invertedString);
}