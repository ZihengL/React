import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const WeatherComponent = ({style}) => {
  const [weather, setWeather] = useState(null);
  const city = "Montreal";
  const apiKey = "2529416537d9a0fe3e4d31daf3174d4f";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <View style={styles.container}>
      {weather ? (
        <Text style={styles.text}>
          Temperature in {city}: {weather.main.temp}°C
        </Text>
      ) : (
        <Text style={styles.text}>Loading weather data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
  },
  text: {
    fontSize: 18,
  },
});

export default WeatherComponent;
