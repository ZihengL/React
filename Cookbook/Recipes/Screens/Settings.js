import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text, Alert } from "react-native";
import { useUser } from "../Redux/UserContext";

import * as SecureStore from "expo-secure-store";
import WeatherComponent from "../Components/WeatherComponent";

const SettingsScreen = () => {
  // const { user } = useUser();
  // const { stayLoggedIn, setStayLoggedIn } = useState(false);
  const { stayLoggedIn, setStayLoggedIn } = useUser();

  const handleToggleStayLoggedIn = async () => {
    try {
      const newValue = !stayLoggedIn;
      setStayLoggedIn(newValue);
      await SecureStore.setItemAsync('stayLoggedIn', newValue.toString());
    } catch (error) {
      Alert.alert('Error', 'Failed to save settings');
    }
  };

  // useEffect(() => {
  //   const loadStayLoggedIn = async () => {
  //     try {
  //       const value = await SecureStore.getItemAsync("stayLoggedIn");
  //       if (value !== null) {
  //         setStayLoggedIn(value === "true");
  //       }
  //     } catch (error) {
  //       Alert.alert("Error", "Failed to load settings");
  //     }
  //   };

  //   loadStayLoggedIn();
  // }, []);

  // const handleToggleStayLoggedIn = async () => {
  //   try {
  //     setStayLoggedIn((currentState) => {
  //       const newValue = !currentState;

  //       console.log("bnew", newValue);

  //       // Perform SecureStore operations after state is definitely updated
  //       (async () => {
  //         await SecureStore.setItemAsync(
  //           "stayLoggedIn",
  //           JSON.stringify(newValue)
  //         );

  //         if (newValue) {
  //           // Ensure 'user' is properly formatted as a string
  //           const userData = JSON.stringify(user.username);
  //           console.log(userData);
  //           await SecureStore.setItemAsync("savedUser", userData);
  //         } else {
  //           await SecureStore.deleteItemAsync("savedUser");
  //         }
  //       })();

  //       return newValue;
  //     });
  //   } catch (error) {
  //     console.error("Error toggling stay logged in", error);
  //     Alert.alert("Error", "Failed to save settings");
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.weather}>
        <WeatherComponent />
      </View>
      <View style={styles.option}>
        <Text>Stay Logged In</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={stayLoggedIn ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={handleToggleStayLoggedIn}
          value={stayLoggedIn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "start",
    alignItems: "left",
  },
  weather: {
    width: "100%",
    paddingVertical: 12,
  },
  option: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default SettingsScreen;
