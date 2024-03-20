import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import ButtonComponent from "../Components/ButtonComponent";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await SecureStore.setItemAsync(
        "user",
        JSON.stringify({ username, email, password })
      );
      Alert.alert("Success", "You are signed up successfully!");
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Error saving user data", error);
      Alert.alert("Error", "Failed to save user data");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <ButtonComponent text="Sign Up" onPress={handleSignUp} />
      <ButtonComponent text="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignContent: "center",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});

export default SignUpScreen;
