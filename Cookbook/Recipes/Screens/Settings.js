import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

const SettingsScreen = () => {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  useEffect(() => {
    loadStayLoggedIn();
  }, []);

  const loadStayLoggedIn = async () => {
    try {
      const value = await SecureStore.getItemAsync("stayLoggedIn");
      if (value !== null) {
        setStayLoggedIn(value === "true");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load settings");
    }
  };

  const handleToggleStayLoggedIn = async () => {
    try {
      const newValue = !stayLoggedIn;
      setStayLoggedIn(newValue);
      await SecureStore.setItemAsync("stayLoggedIn", newValue.toString());
    } catch (error) {
      Alert.alert("Error", "Failed to save settings");
    }
  };

  return (
    <View style={styles.container}>
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
    padding: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default SettingsScreen;
