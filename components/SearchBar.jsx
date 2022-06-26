import {useEffect, useRef} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar = ({textInput, handleTextChange}) => {
  const searchBarRef = useRef(null);

  useEffect(() => {
    searchBarRef.current?.focus();
  }, []);

  return (
    <View style={styles.searchSection}>
      <Feather color="black" name="search" size={24} />
      <TextInput
        ref={searchBarRef}
        placeholder="Search Coins"
        style={styles.input}
        value={textInput}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    height: 40,
    marginVertical: 12,
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 7,
    backgroundColor: "white",
  },
  input: {
    paddingLeft: 5,
    flex: 1,
  },
});

export default SearchBar;
