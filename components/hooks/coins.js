import {useState, useCallback, useEffect} from "react";

import api from "../../api/api";

export const useCoinsData = () => {
  const [coins, setCoins] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleGetCoins = useCallback(async () => {
    const data = await api.getCoins();

    if (data) {
      setCoins(data);

      return;
    }
    setError(data);
  }, []);

  useEffect(() => {
    handleGetCoins();
  }, [handleGetCoins]);

  return {
    coins,
    isLoading: !error && !coins,
    error: error,
  };
};

export const useSearchCoins = (coins) => {
  const [searchCoins, setSearchCoins] = useState(coins ? coins : []);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    if (textInput) {
      const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(textInput.toLowerCase());
      });

      setSearchCoins(filteredCoins);
    }
  }, [textInput]);

  return {
    textInput,
    handleTextChange: setTextInput,
    searchCoins,
  };
};

export const useCoinDetails = (coinId) => {
  const [coinDetails, setCoinDetails] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleGetCoin = useCallback(async () => {
    const data = await api.getCoin(coinId);

    if (data) {
      setCoinDetails(data);

      return;
    }
    setError(data);
  }, [coinId]);

  useEffect(() => {
    handleGetCoin();
  }, [handleGetCoin]);

  return {
    coinDetails,
    isLoading: !error && !coinDetails,
    error: error,
  };
};
