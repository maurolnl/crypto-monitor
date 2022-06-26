/* eslint-disable no-console */
export default {
  getCoins: async () => {
    return fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      });
  },
  getCoin: async () => {
    return fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      });
  },
};
