import React, { useEffect, useState } from "react";
import { Text, View, StyleSheets } from "../components/Themed";
import { styles } from "../screens/TabOneScreen";

function CryptoDetails({ route }) {
  const [crypto, setCrypto] = useState(null);

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
        const selectedCrypto = data.data.find(
          (crypto) => crypto.id === route.params.id
        );
        setCrypto(selectedCrypto);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, [route.params.id]);
  return (
    <>
      <View style={styles.container}>
        {crypto && (
          <>
            <Text>cr{crypto.name}</Text>
            <Text>{crypto.quote.USD.price}</Text>
            <Text>this is a test</Text>
          </>
        )}
      </View>
    </>
  );
}

export default CryptoDetails;
