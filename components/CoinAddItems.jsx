import {View, Text, StyleSheet, Image, TouchableHighlight} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {theme} from "../theme";

import {useCoins} from "./context/coinsContext";

const CoinAddItems = ({coin}) => {
  const {handleAddCoins} = useCoins();

  return (
    <View style={styles.container}>
      <View style={styles.left_element}>
        <Image source={{uri: coin.image}} style={styles.coin_image} />
        <View style={{marginLeft: 10}}>
          <Text numberOfLines={1} style={[text.white, text.container]}>
            {coin.name}
          </Text>
          <Text style={text.white}>{coin.symbol.toUpperCase()}</Text>
        </View>
      </View>
      <TouchableHighlight style={styles.right_element} onPress={() => handleAddCoins(coin)}>
        <View style={styles.button_wrapper}>
          <Ionicons color={theme.colors.neutral.white} name="add-circle-outline" size={22} />
          <Text style={styles.button_text}>Add</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  left_element: {
    flexDirection: "row",
  },
  right_element: {
    backgroundColor: theme.colors.secondary,
    padding: 8,
    borderRadius: 5,
  },
  button_wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  button_text: {
    fontSize: theme.fontSizes.body.l,
    color: theme.colors.neutral.white,
    marginLeft: 3,
  },
  coin_image: {
    width: 40,
    height: 40,
  },
});

const text = StyleSheet.create({
  white: {
    color: "white",
  },
  container: {
    width: 95,
  },
});

export default CoinAddItems;
