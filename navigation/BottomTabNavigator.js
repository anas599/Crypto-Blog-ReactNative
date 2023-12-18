import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import CryptoDetails from "../components/CryptoDetails";

const BottomTab = createBottomTabNavigator();
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen
        name="CryptoDetails"
        component={CryptoDetails}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Crypto" component={TabOneNavigator} />
      <BottomTab.Screen name="Exchanges" component={TabTwoScreen} />
    </BottomTab.Navigator>
  );
}
