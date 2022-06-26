import {View, Text, StyleSheet, ActivityIndicator, Dimensions} from "react-native";
import {
  ChartPathProvider,
  ChartPath,
  monotoneCubicInterpolation,
  ChartDot,
} from "@rainbow-me/animated-charts";

import {theme} from "../theme";

import {useCoinDetails} from "./hooks/coins";

export const {width: SIZE} = Dimensions.get("window");

export const data = [
  {x: 1453075200, y: 1.47},
  {x: 1453161600, y: 1.37},
  {x: 1453248000, y: 1.53},
  {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52},
  {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.1},
  {x: 1453680000, y: 2.5},
  {x: 1453766400, y: 2.3},
  {x: 1453852800, y: 2.42},
  {x: 1453939200, y: 2.55},
  {x: 1454025600, y: 2.41},
  {x: 1454112000, y: 2.43},
  {x: 1454198400, y: 2.2},
];

const CoinDetails = ({route}) => {
  const {coinId} = route.params;
  //const {coinDetails, isLoading, error} = useCoinDetails(coinId);

  const points = monotoneCubicInterpolation({data, range: 40});

  // if (isLoading) {
  //   return <ActivityIndicator color={theme.colors.secondary} size="large" />;
  // }

  return (
    // <ChartPathProvider data={{points, smoothingStrategy: "bezier"}}>
    //   <View style={details.container}>
    //     <Text style={details.title}>{coinId}</Text>
    //     <View style={{backgroundColor: "black"}}>
    //       {/* <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} /> */}
    //       {/* <ChartDot style={{backgroundColor: "blue"}} /> */}
    //     </View>
    //   </View>
    // </ChartPathProvider>
    <View style={{backgroundColor: "black"}}>
      <ChartPathProvider data={{points, smoothingStrategy: "bezier"}}>
        <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
        {/* <ChartDot style={{backgroundColor: "blue"}} /> */}
      </ChartPathProvider>
    </View>
  );
};

const details = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20,
  },
  title: {
    fontSize: theme.fontSizes.title.xxl,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.neutral.white,
    marginBottom: 20,
  },
});

export default CoinDetails;
