import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";

import { useUser } from "../Redux/UserContext";
import * as SecureStore from "expo-secure-store";
import Icon from "react-native-vector-icons/Ionicons";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleSignIn = async () => {
    try {
      const userData = await SecureStore.getItemAsync(username);
      const userDetails = userData ? JSON.parse(userData) : null;

      if (userDetails && password === userDetails.password) {
        setUser(userDetails);
        navigation.navigate("Home");
      } else {
        Alert.alert("Failed", "Invalid username or password");
      }
    } catch (error) {
      console.error("Error reading user data", error);
      Alert.alert("Error", "Failed to read user data");
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={"pizza"} size={10} color={"#246b7d"} />

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <ButtonComponent text="Sign In" onPress={handleSignIn} />
      <ButtonComponent
        text="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
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

export default SignInScreen;
