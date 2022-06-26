import {useState} from "react";
import {Pressable, StatusBar, StyleSheet, TextInput, TouchableHighlight} from "react-native";
import {View, Text} from "react-native";
import {Entypo, AntDesign} from "@expo/vector-icons";

import {theme} from "../theme";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //TODO: divide in different components
  return (
    <View style={styles.app_container}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Coin Tracker!</Text>
        <Text style={styles.subtitle}>Let&apos;s log you in</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Phone, email or username"
          placeholderTextColor={theme.colors.neutral.gray}
          style={styles.input}
        />
        <View style={styles.password_input}>
          <TextInput
            autoCorrect={false}
            multiline={false}
            placeholder="Password"
            placeholderTextColor={theme.colors.neutral.gray}
            secureTextEntry={!showPassword}
            style={{color: theme.colors.neutral.white}}
            textContentType="password"
          />
          <TouchableHighlight style={styles.button_wrapper} onPress={togglePassword}>
            <View>
              {showPassword ? (
                <Entypo color={theme.colors.secondary} name="eye" size={20} />
              ) : (
                <Entypo color={theme.colors.secondary} name="eye-with-line" size={20} />
              )}
            </View>
          </TouchableHighlight>
        </View>
        <Pressable onPress={() => console.log("press")}>
          <Text style={styles.forgot_password}>Forgot your password?</Text>
        </Pressable>
        <TouchableHighlight style={styles.log_button} onPress={() => console.log("preseses")}>
          <View>
            <Text style={styles.log_button.text}>Log In</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.separator} />
      <View style={styles.log_options}>
        <TouchableHighlight style={styles.log_option_button} onPress={() => console.log("press")}>
          <View>
            <AntDesign color={theme.colors.neutral.white} name="google" size={30} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.log_option_button} onPress={() => console.log("press")}>
          <View>
            <AntDesign color={theme.colors.neutral.white} name="apple1" size={30} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.log_option_button} onPress={() => console.log("press")}>
          <View>
            <AntDesign color={theme.colors.neutral.white} name="facebook-square" size={30} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer.text}>Not a member? </Text>
        <Pressable onPress={() => console.log("press")}>
          <Text style={styles.footer.text_link}>Register now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 17,
  },
  title: {
    color: theme.colors.neutral.white,
    fontSize: theme.fontSizes.title.xxl,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  subtitle: {
    color: theme.colors.neutral.subtle_white,
    fontSize: theme.fontSizes.title.xl,
    fontWeight: theme.fontWeights.semiBold,
  },
  header: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  input: {
    borderColor: theme.colors.neutral.gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: theme.colors.neutral.white,
  },
  password_input: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.neutral.gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: theme.colors.neutral.white,
  },
  button_wrapper: {
    border: 1,
    borderRadius: 5,
    borderColor: theme.colors.secondary,
    borderStyle: "solid",
    padding: 5,
  },
  log_button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
    text: {
      color: theme.colors.neutral.white,
      fontSize: theme.fontSizes.title.sm,
      fontWeight: theme.fontWeights.semiBold,
    },
  },
  forgot_password: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.body.l,
    fontWeight: theme.fontWeights.bold,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  separator: {
    marginVertical: 45,
    borderBottomColor: theme.colors.neutral.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  log_options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  log_option_button: {
    padding: 25,
    marginRight: 10,
    backgroundColor: theme.colors.neutral.black,
    borderRadius: 5,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    text: {
      color: theme.colors.neutral.white,
      fontSize: theme.fontSizes.body.l,
      fontWeight: theme.fontWeights.bold,
    },
    text_link: {
      color: theme.colors.secondary,
      fontSize: theme.fontSizes.body.l,
      fontWeight: theme.fontWeights.bold,
    },
  },
});

export default LogIn;
