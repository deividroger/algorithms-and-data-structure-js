function reverse(str) {

    return str.split('').reduce((rev, char) =>
        char + rev
        , '');
}

function reverseSolution2(str) {

    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

function reverseSolution1(str) {

    return str.split('').reverse().join('');
}

module.exports = reverse;