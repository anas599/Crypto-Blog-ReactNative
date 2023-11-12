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
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} />
      <TabOneStack.Screen name="CryptoDetails" component={CryptoDetails} />
    </TabOneStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TabOne" component={TabOneNavigator} />
      <BottomTab.Screen name="TabTwo" component={TabTwoScreen} />
    </BottomTab.Navigator>
  );
}
