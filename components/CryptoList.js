import { StyleSheet, ActivityIndicator, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "./Themed";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import formatNumber from "../functions/formatNumber";
import { fetchData, selectData } from "../redux/apiSlice";
import toLowerCase from "../functions/toLowerCase";
export default function CryptoList() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const dataRedux = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData()).then(() => setLoading(false));
  }, [dispatch]);
  if (loading || !dataRedux.data) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <View style={styles.container}>
        {dataRedux.data.map((crypto) => (
          <LinearGradient
            key={crypto.id}
            colors={["#7C3AED", "#4F46E5", "#1B9CFC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <View style={styles.innerContainer}>
              <Image
                source={{
                  uri: `https://coinicons-api.vercel.app/api/icon/${toLowerCase(
                    crypto.symbol
                  )}`,
                }}
                style={{ width: 30, height: 30 }}
              />

              <Button
                title={crypto.name}
                style={{ fontSize: 20, fontWeight: "bold" }}
                onPress={() =>
                  navigation.navigate("CryptoDetails", { id: crypto.id })
                }
              >
                {crypto.name}
              </Button>
              <Text>{crypto.symbol}</Text>
              <Text>
                Cir. Supply: {formatNumber(crypto.circulating_supply)}
              </Text>
              <Text>
                Date Added: {new Date(crypto.date_added).toLocaleDateString()}
              </Text>
              <Text>Price: {crypto.quote.USD.price.toFixed(2)}</Text>
            </View>
          </LinearGradient>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
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
    height: 180,
    width: 160,
    borderRadius: 20,
    margin: 4,
  },
  innerContainer: {
    borderRadius: 15,
    flex: 1,
    margin: 4,
    backgroundColor: "#2d3748",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
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
