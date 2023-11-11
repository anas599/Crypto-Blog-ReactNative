import { StyleSheet, ActivityIndicator, Button } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import formatNumber from "../functions/formatNumber";

export default function TabOneScreen() {
  const navigation = useNavigation();
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
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
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD",
          options
        );
        const data = await response.json();
        setQuote(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <>
      <>
        {quote.map((crypto) => (
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
