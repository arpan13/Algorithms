/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let obsp = -prices[0];
    let ossp = 0;

    for (let i = 1; i < prices.length; i++) {
        let nbsp = 0;
        let nssp = 0;
        if (ossp - prices[i] > obsp) {
            nbsp = ossp - prices[i];
        } else {
            nbsp = obsp;
        }
        if (prices[i] + obsp - fee > ossp) {
            nssp = prices[i] + obsp - fee
        } else {
            nssp = ossp;
        }
        obsp = nbsp;
        ossp = nssp;
    }
    return ossp;
};