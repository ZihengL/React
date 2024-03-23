import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { COLORS } from "../Tools/Defaults";
import { useUser } from "../Redux/UserContext";

import * as SecureStore from "expo-secure-store";
import WeatherComponent from "../Components/WeatherComponent";

const SettingsScreen = ({ navigation }) => {
  const { user, setUser, stayLoggedIn, setStayLoggedIn } = useUser();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity text="Logout" onPress={() => setUser(null)}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleToggleStayLoggedIn = async () => {
    try {
      const newValue = !stayLoggedIn;
      setStayLoggedIn(newValue);
      await SecureStore.setItemAsync("stayLoggedIn", newValue.toString());

      if (newValue && user) {
        await SecureStore.setItemAsync("savedUser", JSON.stringify(user));
      } else {
        await SecureStore.deleteItemAsync("savedUser");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to save settings");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <WeatherComponent />
      </View>

      <View style={styles.option}>
        <Text style={{ color: user ? COLORS.PRIMARY : COLORS.SECONDARY }}>
          Stay Logged In
        </Text>
        <Switch
          trackColor={{ false: COLORS.SECONDARY2, true: COLORS.PRIMARY2 }}
          thumbColor={stayLoggedIn ? COLORS.SECONDARY : COLORS.PRIMARY}
          onValueChange={handleToggleStayLoggedIn}
          value={stayLoggedIn}
          disabled={!user}
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
  option: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default SettingsScreen;
