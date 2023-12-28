import React from "react";
import { Button } from "@rneui/themed";

import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const CommentForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("User logged in successfully ✅");
      setLoading(false);
    } catch (error) {
      alert("Error signing in " + error.code + " " + error.message);
      console.log(error);
    }
  };
  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("User created successfully ✅");
    } catch (error) {
      alert("Error signing up " + error.code + " " + error.message);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.text}>Enter your email and password</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </KeyboardAvoidingView>

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="grey"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Button
            title="Login"
            onPress={() => signIn()}
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              marginHorizontal: 80,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
          <Button
            title="SignUp"
            onPress={() => signUp()}
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              marginHorizontal: 80,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    padding: 10,
    marginVertical: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
export default CommentForm;
