import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
} from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import { COLORS } from "../Tools/Defaults";
import { ACTIONS } from "../Redux/RecipesReducer";
import { useUser } from "../Redux/UserContext";
import { useRecipes } from "../Redux/RecipesContext";
import * as SecureStore from "expo-secure-store";
import Icon from "react-native-vector-icons/Ionicons";

const LogoComponent = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const { dispatch } = useRecipes();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (keyboardVisible) {
    return;
  }

  return (
    <Icon
      name={"pizza"}
      size={100}
      color={COLORS.PRIMARY}
      style={{ alignSelf: "center" }}
    />
  );
};

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUser();
  const { dispatch } = useRecipes();

  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, [user]);

  const handleSignIn = async () => {
    try {
      const userData = await SecureStore.getItemAsync(username);
      const userDetails = userData ? JSON.parse(userData) : null;

      if (userDetails && password === userDetails.password) {
        setUser(userDetails);
        await dispatch({ type: ACTIONS.SET, payload: userDetails.id });
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
      <View style={styles.logoContainer}>
        <LogoComponent />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>COOK</Text>
          <Text style={styles.title}>BOOK</Text>
        </View>
      </View>

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

      <TouchableOpacity
        text="New User"
        onPress={() => navigation.navigate("SignUp")}
      />

      <ButtonComponent text="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "start",
    alignContent: "center",
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignSelf: "center",
    textAlign: "center",
  },
  titleContainer: {
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "#246b7d",
  },
  title: {
    fontWeight: "800",
    fontSize: 40,
    color: "#246b7d",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});

export default SignInScreen;
