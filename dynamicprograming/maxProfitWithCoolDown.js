/**
 * @param {number[]} prices
 * @return {number}
 * Best Time to Buy and Sell Stock with Cooldown
 */
var maxProfit = function (prices) {
    let hold = -Infinity, sold = 0, rest = 0;
    for (let i = 0; i < prices.length; i++) {
        let nextHold = Math.max(hold, rest - prices[i]);
        let nextSold = hold + prices[i];
        let nextRest = Math.max(rest, sold);
        hold = nextHold;
        sold = nextSold;
        rest = nextRest;
    }
    return Math.max(sold, rest);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let obsp = -prices[0];
    let ossp = 0;
    let ocsp = 0;

    for (let i = 1; i < prices.length; i++) {
        let nbsp = 0;
        let nssp = 0;
        let ncsp = 0;

        if (ocsp - prices[i] > obsp) {
            nbsp = ocsp - prices[i]
        } else {
            nbsp = obsp;
        }
        if (obsp + prices[i] > ossp) {
            nssp = obsp + prices[i]
        } else {
            nssp = ossp
        }

        if (ossp > ocsp) {
            ncsp = ossp;
        } else {
            ncsp = ocsp;
        }
        obsp = nbsp;
        ossp = nssp;
        ocsp = ncsp;

    }
    return ossp;
};