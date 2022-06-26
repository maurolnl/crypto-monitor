import {View, FlatList} from "react-native";

import CoinItem from "./CoinItem";
import CoinAddItems from "./CoinAddItems";

const CoinList = ({allCoins, userCoins}) => {
  const coins = allCoins ? allCoins : userCoins;

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => <View style={{marginBottom: 5}} />}
        data={coins}
        renderItem={({item: coin}) => {
          return allCoins ? <CoinAddItems coin={coin} /> : <CoinItem coin={coin} />;
        }}
      />
    </View>
  );
};

export default CoinList;
