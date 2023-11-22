import { StyleSheet, ActivityIndicator } from "react-native";

import { Text, View } from "../components/Themed";
import CryptoList from "../components/top3";
export default function TabOneScreen() {
  return (
    <>
      <View style={styles.container}></View>
      <CryptoList />
    </>
  );
}

const styles = StyleSheet.create({
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
});
