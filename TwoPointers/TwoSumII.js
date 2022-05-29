var twoSum = function (numbers, k) {
    let map = new Map();
    let sumarr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(k - numbers[i])) {
            sumarr.push(map.get(k - numbers[i]) + 1);
            sumarr.push(i + 1);
            break;
        } else {
            map.set(numbers[i], i);
        }
    }
    return sumarr;
};

console.log(twoSum([2, 7, 11, 15], 9))