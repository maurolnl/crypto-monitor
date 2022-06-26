import {createContext, useCallback, useState, useContext} from "react";

import {useCoinsData} from "../hooks/coins";

const CoinContext = createContext();

export const ProvideContext = ({children}) => {
  const coins = useProvideCoins();

  return <CoinContext.Provider value={coins}>{children}</CoinContext.Provider>;
};

export const useCoins = () => {
  return useContext(CoinContext);
};

const useProvideCoins = () => {
  const {coins, isLoading, error} = useCoinsData();
  const [userCoins, setUserCoins] = useState([]);

  const handleAddCoins = useCallback(
    (coin) => {
      setUserCoins((coins) => [...coins, coin]);
    },
    [setUserCoins],
  );

  return {
    coins,
    isLoading,
    error,
    userCoins,
    handleAddCoins,
  };
};
