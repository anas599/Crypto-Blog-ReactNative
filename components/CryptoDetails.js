import React, { useEffect, useState } from "react";
import { Text, View, StyleSheets } from "../components/Themed";
import { styles } from "../screens/TabOneScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments } from "../redux/commentsSlice";
import toLowerCase from "../functions/toLowerCase";
import { selectData } from "../redux/apiSlice";
import { Image } from "react-native";
import formatNumber from "../formatNumber";

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
  let author;
  if (filterComment && filterComment.length > 0) {
    author = filterComment[0].username;
  }

  return (
    <>
      <View>
        {crypto && (
          <>
            <View className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
              <View className="flex items-center justify-center bg-gray-800 back flex-col p-3  text-center">
                <Image
                  source={{
                    uri: `https://coinicons-api.vercel.app/api/icon/${toLowerCase(
                      crypto.symbol
                    )}`,
                  }}
                  className="rounded-full w-20 h-20"
                />
                <Text>{crypto.name}</Text>
                <Text>{formatNumber(crypto.quote.USD.price)}</Text>
              </View>
            </View>
            {filterComment.length > 0
              ? filterComment.map((item) => (
                  <View className=" text-black dark:text-gray-200 p-4 antialiased flex max-w-lg shadowFilter ">
                    <View>
                      <View className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                        <Image
                          className="rounded-full w-10 h-10"
                          src={item.userpic}
                        />
                        <Text className="font-semibold text-sm leading-relaxed">
                          {author}
                        </Text>
                        <Text className="text-normal leading-snug md:leading-normal">
                          {item.content}
                        </Text>
                      </View>
                      <Text className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
                        {item.createdAt}
                      </Text>
                    </View>
                  </View>
                ))
              : null}
          </>
        )}
      </View>
    </>
  );
}
export default CryptoDetails;
