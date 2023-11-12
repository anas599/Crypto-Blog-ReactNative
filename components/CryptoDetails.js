import React, { useEffect, useState } from "react";
import { Text, View, StyleSheets } from "../components/Themed";
import { styles } from "../screens/TabOneScreen";
import { useDispatch, useSelector } from "react-redux";

import { fetchData, selectData } from "../redux/apiSlice";

function CryptoDetails({ route }) {
  const [crypto, setCrypto] = useState(null);
  const dataRedux = useSelector(selectData);

  useEffect(() => {
    const selectedCrypto = dataRedux.data.find(
      (crypto) => crypto.id === route.params.id
    );
    setCrypto(selectedCrypto);
  }, [route.params.id, dataRedux.data]);
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
