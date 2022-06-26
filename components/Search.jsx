import {useLayoutEffect} from "react";
import {View, Text, StyleSheet, Platform} from "react-native";

import {theme} from "../theme";

import {useSearchCoins} from "./hooks/coins";
import CoinList from "./CoinList";
import {useCoins} from "./context/coinsContext";
import SearchBar from "./SearchBar";

const Search = ({navigation}) => {
  //TODO: change fetch for swr fetch
  const {coins, isLoading, error} = useCoins();
  const {textInput, handleTextChange, searchCoins} = useSearchCoins(coins);

  const isIOs = Platform.OS === "ios";
  const isAndroid = Platform.OS === "android";

  useLayoutEffect(() => {
    if (isIOs) {
      navigation.setOptions({
        headerTitle: "Search Coins",
        headerSearchBarOptions: {
          placeholder: "Search Coins",
          onChangeText: (event) => handleTextChange(event.nativeEvent.text),
        },
      });
    }
  }, [navigation, handleTextChange, isIOs]);

  if (error) {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: "red"}}>An error ocurred when fetching coins from db</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: "white"}}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.body}>
      {isAndroid && <SearchBar handleTextChange={handleTextChange} value={textInput} />}
      <CoinList allCoins={searchCoins} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
  },
});

export default Search;
