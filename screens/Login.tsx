import React from "react";
import {
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Formik, Field } from "formik";
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </KeyboardAvoidingView>
      <Button
        title="alert test"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Button
            style={styles.button}
            title="Login"
            onPress={() => signIn()}
          />
          <Button
            style={styles.button}
            title="SignUp"
            onPress={() => signUp()}
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
    borderColor: "#000",
    padding: 10,
    marginBottom: 3,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
export default CommentForm;
