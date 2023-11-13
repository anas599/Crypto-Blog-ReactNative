import { StyleSheet, ActivityIndicator, ScrollView } from "react-native";

import { Text } from "../components/Themed";
import CryptoList from "../components/CryptoList";
export default function TabOneScreen() {
  return (
    <ScrollView>
      {/* <View style={styles.container}></View> */}
      <CryptoList />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  textBorder: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  textNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
  textNumber24: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
});
