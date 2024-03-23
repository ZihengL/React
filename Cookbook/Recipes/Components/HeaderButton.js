import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function HeaderButton(text, onPress) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ fontSize: 15, marginRight: 20, color: "#FFF" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
