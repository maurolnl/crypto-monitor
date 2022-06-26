import {View, TouchableHighlight} from "react-native";
import {Feather} from "@expo/vector-icons";

import {theme} from "../theme";

const SearchIcon = ({onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Feather color={theme.colors.secondary} name="search" size={24} />
      </View>
    </TouchableHighlight>
  );
};

export default SearchIcon;
