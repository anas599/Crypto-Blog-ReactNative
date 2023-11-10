import { StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

import { Text, View } from "../components/Themed";
import CryptoList from "../components/top3";
export default function TabOneScreen() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "7974008e-e711-40f4-8b21-42c19b00e602",
      },
    };
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=3&convert=USD",
          options
        );
        const data = await response.json();
        setQuote(data);
        console.log(quote.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);
  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab One</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        {quote.data ? (
          <View>
            {quote.data.map((item) => {
              return (
                <View key={item.id}>
                  <Text style={styles.text}>Name: {item.name}</Text>
                  <Text style={styles.textNumber}>
                    Price: {item.quote.USD.price}
                  </Text>
                  <Text style={styles.textNumber24}>
                    Change 24h: {item.quote.USD.percent_change_24h}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )} */}
      </View>
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
