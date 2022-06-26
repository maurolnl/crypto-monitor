import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import {theme} from "../theme";

const HeaderLogo = () => {
  return (
    <View style={styles.header}>
      <AntDesign color="white" name="linechart" size={22} />
      <Text style={styles.title}>Crypto Monitor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 0,
  },
  title: {
    color: "white",
    fontSize: theme.fontSizes.title.m,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default HeaderLogo;
