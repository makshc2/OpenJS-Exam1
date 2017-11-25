function getFriendlyNumbers(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0 || start > end) return false;
    var friendlyNumbers = [];

    function divisors(num) {
        var arr = [];
        for (var i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    //получаю сумму делителей
    function sum(someArr) {
        var amount = 0;
        for (var j = 0; j < someArr.length; j++) {
            amount += someArr[j];
        }
        return amount;
    }
    //пребираю каждое число 
    for (var k = start; k <= end; k++) {
        var sumDivisors1 = sum(divisors(k));
        for (var j = k + 1; j <= end; j++) {
            if (sumDivisors1 === j && sum(divisors(j)) === k) {
                friendlyNumbers.push([k, j])
            }
        }
    }
    return friendlyNumbers;
}


module.exports = {
    firstName: 'Maxim',
    secondName: 'Shevjakov',
    task: getFriendlyNumbers
};