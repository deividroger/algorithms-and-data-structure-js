
function palindrome(str) {

    return str.split('').every((char, i) =>
        char === str[str.length - i - 1]
    );
}

function palindromeSolution1(str) {

    const reversed = str.split('').reverse().join('');

    return str === reversed;

}

module.exports = palindrome;