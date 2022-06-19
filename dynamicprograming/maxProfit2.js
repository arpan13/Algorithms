/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let bd = 0;
    let sd = 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] >= prices[i - 1]) {
            sd++;
        } else {
            profit += prices[sd] - prices[bd];
            sd = bd = i;
            i = i + 1;
        }
    }
    profit += prices[sd] - prices[bd];
    return profit;


};

var maxProfit = function (prices) {
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];
    }

    return max;
}