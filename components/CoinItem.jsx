import {TouchableHighlight, View, StyleSheet, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

const CoinItem = ({coin}) => {
  const isVariationPositiveColor = coin.price_change_percentage_24h > 0 ? "green" : "red";

  const {id} = coin;

  const navigation = useNavigation();

  return (
    <TouchableHighlight onPress={() => navigation.navigate("CoinDetails", {coinId: id})}>
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
        <View>
          <Text style={text.white}>Middle</Text>
        </View>
        <View style={styles.right_element}>
          <Text style={{color: "white", fontWeight: "bold"}}>${coin.current_price}</Text>
          <Text style={{color: isVariationPositiveColor}}>{coin.price_change_percentage_24h}%</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  coin_image: {
    width: 40,
    height: 40,
  },
  left_element: {
    flexDirection: "row",
    flexGrow: 1,
    flexBasis: 0,
  },
  right_element: {
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: "center",
    alignItems: "flex-end",
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

export default CoinItem;
