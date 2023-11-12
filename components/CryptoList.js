import { StyleSheet, ActivityIndicator, Button } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "./Themed";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import formatNumber from "../functions/formatNumber";
import { fetchData, selectData } from "../redux/apiSlice";
export default function CryptoList() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const dataRedux = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData()).then(() => setLoading(false));
  }, [dispatch]);
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <>
      <>
        {dataRedux.data.map((crypto) => (
          <LinearGradient
            key={crypto.id}
            colors={["#7C3AED", "#4F46E5", "#1B9CFC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <View style={styles.innerContainer}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {crypto.name}
              </Text>
              <Text>
                Circulating Supply: {formatNumber(crypto.circulating_supply)}
              </Text>
              <Text>
                Date Added: {new Date(crypto.date_added).toLocaleDateString()}
              </Text>
              <Text>Max Supply: {formatNumber(crypto.max_supply)}</Text>
              <Text>Symbol: {crypto.symbol}</Text>
              <Text>Total Supply: {formatNumber(crypto.total_supply)}</Text>
              <Button
                title={crypto.name}
                onPress={() =>
                  navigation.navigate("CryptoDetails", { id: crypto.id })
                }
                key={crypto.id}
              />
            </View>
          </LinearGradient>
        ))}
      </>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
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
  linearGradient: {
    height: 150,
    width: 200,
    borderRadius: 20,
    margin: 5,
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#cc2b5e",
    backgroundColor: "transparent",
  },
});
