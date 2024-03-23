import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import IngredientsComponent from "../Components/IngredientsComponent";
import ButtonComponent from "../Components/ButtonComponent";
import * as ImageTool from "../Tools/ImageTool";
import * as Notifications from "expo-notifications";

import { useUser, saveRecipes } from "../Redux/UserContext";
import { useRecipes } from "../Redux/RecipesContext";
import { ACTIONS } from "../Redux/RecipesReducer";
import { COLORS } from "../Tools/Defaults";

const screenWidth = Dimensions.get("window").width;
const calculatedHeight = (screenWidth * 9) / 16;

const ViewRecipeScreen = ({ route, navigation }) => {
  const { recipes, dispatch } = useRecipes();
  const { recipeID } = route.params;
  const recipe = recipes.find((r) => r.id === recipeID);

  const print = () => {
    console.log(recipe);
    console.log(recipe.picture);
  };

  return (
    <View style={styles.container}>
      <ButtonComponent onPress={print} />
      <View style={styles.title}>
        <Text style={styles.inputTitle}>Name</Text>
        {recipe.picture && (
          <Image
            source={{ uri: recipe.picture }}
            style={styles.picture}
            resizeMode="cover"
          />
        )}
      </View>

      <View style={styles.title}>
        <Text style={styles.inputTitle}>Name</Text>
        <Text>{recipe.name}</Text>
      </View>

      <View style={styles.title}>
        <Text style={styles.inputTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient) => (
          <Text key={ingredient.key}>{ingredient.text}</Text>
        ))}
      </View>

      <View style={styles.title}>
        <Text style={styles.inputTitle}>Instructions</Text>
        <Text>{recipe.instructions}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "start",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  inputTitle: {
    marginBottom: 10,
    color: COLORS.PRIMARY,
  },
  picture: {
    flex: 1,
    width: "100%",
    height: 300,
    borderRadius: 5,
    borderColor: COLORS.SECONDARY,
  },
  text: {
    flexGrow: 1,
    padding: 20,
  },
});

export default ViewRecipeScreen;
