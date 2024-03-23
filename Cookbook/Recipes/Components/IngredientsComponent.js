import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../Tools/Defaults";

export default IngredientsComponent = ({ onStateChange }) => {
  const [ingredients, setIngredients] = useState([
    { key: Date.now(), text: "" },
  ]);

  const addIngredient = () => {
    const newIngredients = [...ingredients, { key: Date.now(), text: "" }];

    setIngredients(newIngredients);
    onStateChange(newIngredients);
  };

  const updateIngredient = (key, text) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.key === key) {
        return { ...ingredient, text: text };
      }

      return ingredient;
    });

    setIngredients(updatedIngredients);
    onStateChange(updatedIngredients);
  };

  const deleteIngredient = (key) => {
    const filteredIngredients = ingredients.filter(
      (input) => input.key !== key
    );

    setIngredients(filteredIngredients);
    onStateChange(filteredIngredients);
  };

  return (
    <View style={styles.container}>
      {ingredients.map((ingredient, index) => (
        <View key={ingredient.key} style={styles.ingredientContainer}>
          <TextInput
            style={styles.ingredients}
            value={ingredient.text}
            onChangeText={(text) => updateIngredient(ingredient.key, text)}
            // placeholder={`Ingredient ${index + 1}`}
          />

          <TouchableOpacity onPress={() => deleteIngredient(ingredient.key)}>
            <Icon name={"close-outline"} size={20} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
      ))}
      <ButtonComponent text="Add an ingredient" onPress={addIngredient} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
  ingredientContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  ingredients: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.PRIMARY,
    color: COLORS.PRIMARY,
  },
});
