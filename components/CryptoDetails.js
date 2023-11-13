import React, { useEffect, useState } from "react";
import { Text, View, StyleSheets } from "../components/Themed";
import { styles } from "../screens/TabOneScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments } from "../redux/commentsSlice";
import { FEATURE_ENABLED } from "@env";
import { fetchData, selectData } from "../redux/apiSlice";

function CryptoDetails({ route }) {
  const [crypto, setCrypto] = useState(null);
  const dataRedux = useSelector(selectData);
  const commentsRedux = useSelector(selectComments);
  const nameLower = crypto?.name?.toLowerCase();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  useEffect(() => {
    const selectedCrypto = dataRedux.data.find(
      (crypto) => crypto.id === route.params.id
    );
    setCrypto(selectedCrypto);
  }, [route.params.id, dataRedux.data]);

  const mycomment = commentsRedux;
  const filterComment =
    mycomment?.length === undefined
      ? []
      : mycomment?.filter((item) => item.coincommentId === nameLower);
  // console.log(filterComment[0].username);
  let author;
  if (filterComment && filterComment.length > 0) {
    author = filterComment[0].username;
  }

  return (
    <>
      <View style={styles.container}>
        {crypto && (
          <>
            <Text>{crypto.name}</Text>
            <Text>{crypto.quote.USD.price}</Text>
            {filterComment.length > 0
              ? filterComment.map((item) => (
                  <Text key={item.id} style={styles.textBorder}>
                    <Text style={[styles.textBorder, styles.userName]}>
                      {author}
                    </Text>
                    {item.content}
                  </Text>
                ))
              : null}
          </>
        )}
      </View>
    </>
  );
}
export default CryptoDetails;
