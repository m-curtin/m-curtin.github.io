/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = BigInt(10);
    let maxProfitPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfitPrice) {
            maxProfitPrice = prices[i] - minPrice;
        }
    }
    console.log({minPrice, maxProfitPrice})
    return maxProfitPrice;
};


console.log(maxProfit([7,1,5,3,6,4]))