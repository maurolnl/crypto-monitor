import {useCallback, useLayoutEffect} from "react";
import {View, Text, StatusBar, TouchableOpacity} from "react-native";
import {StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {theme} from "../theme";

import CoinList from "./CoinList";
import {useCoins} from "./context/coinsContext";
import SearchIcon from "./SearchIcon";

const Main = ({navigation}) => {
  const {userCoins} = useCoins();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SearchIcon onPress={onPress} />,
    });
  }, [navigation, onPress]);

  const onPress = useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  return (
    <View style={styles.app_container}>
      <StatusBar backgroundColor="#040411" />
      <View style={styles.body}>
        {userCoins.length <= 0 ? (
          <View style={styles.main}>
            <TouchableOpacity style={styles.wrapper_main} onPress={onPress}>
              <Ionicons color={theme.colors.secondary} name="add-circle-outline" size={30} />
              <Text style={[styles.text_gray, styles.text_large]}>Add a Coin to get started!</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <CoinList userCoins={userCoins} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper_main: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  text_large: {
    fontSize: theme.fontSizes.title.l,
  },
  text_gray: {
    color: "gray",
  },
});

export default Main;
