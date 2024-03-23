import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import { COLORS } from "../Tools/Defaults";
import * as SecureStore from "expo-secure-store";


const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      Alert.alert(
        "Error",
        "Username and password fields cannot be blank or whitespaces"
      );
    } else {
      try {
        await SecureStore.setItemAsync(
          username,
          JSON.stringify({ username, email, password })
        );

        Alert.alert("Success", "You are signed up successfully!");
        navigation.navigate("SignIn");
      } catch (error) {
        console.error("Error saving user data", error);
        Alert.alert("Error", "Failed to save user data");
      }
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

      <ButtonComponent text="Register" onPress={handleSignUp} />
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
    borderColor: COLORS.SECONDARY,
    padding: 10,
  },
});

export default SignUpScreen;
