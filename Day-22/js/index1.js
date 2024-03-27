function checkPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isSymmetry(n) {
    return n.toString() === n.toString().split("").reverse().join("");
}

function findPrime(n) {
    while (true) {
        if (checkPrime(n) && isSymmetry(n)) {
            return n;
        }
        n++;
    }
}

var number = +prompt("Enter a number: ");
console.log(findPrime(number));
