/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        buyPrice = Math.min(buyPrice, prices[i]);
        max = Math.max(max, prices[i] - buyPrice);
    }
    return max;
};