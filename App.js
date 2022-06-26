import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {ProvideContext} from "./components/context/coinsContext";
import HeaderLogo from "./components/HeaderLogo";
import Main from "./components/Main";
import Search from "./components/Search";
import LogIn from "./components/LogIn";
import {theme} from "./theme";
import CoinDetails from "./components/CoinDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTintColor: theme.colors.neutral.white,
  };

  const homeScreenOptions = {
    headerTitle: (props) => <HeaderLogo {...props} />,
  };

  const searchScreenOptions = {
    title: "Search Coins",
  };

  const logInScreenOptions = {
    title: "Log In",
    headerShown: false,
  };

  return (
    <ProvideContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
          <Stack.Screen component={Main} name={"Home"} options={homeScreenOptions} />
          <Stack.Screen component={Search} name={"Search"} options={searchScreenOptions} />
          <Stack.Screen component={LogIn} name={"LogIn"} options={logInScreenOptions} />
          <Stack.Screen component={CoinDetails} name={"CoinDetails"} options={homeScreenOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvideContext>
  );
};

export default App;
