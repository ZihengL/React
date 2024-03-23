import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { ACTIONS } from "../Redux/RecipesReducer";
import { useRecipes } from "../Redux/RecipesContext";

const ListRecipeComponent = ({ recipe, navigation }) => {
  const { dispatch } = useRecipes();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.recipe}
        onPress={() =>
          navigation.navigate("ViewRecipe", { recipeID: recipe.id })
        }
      >
        <Text style={styles.name}>{recipe.name}</Text>
        <View style={styles.infoContainer}>
          <Text>{recipe.author}</Text>
          <Text>{new Date(recipe.id).toDateString()}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.delete}
        onPress={async () => {
          await dispatch({ type: ACTIONS.DELETE, payload: { id: recipe.id } });
        }}
      >
        <Image
          source={require("../../res/trash.png")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    flexDirection: "row",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#262626",
  },
  recipe: {
    flex: 6,
    justifyContent: "start",
    alignItems: "left",
    padding: 15,
    backgroundColor: "#e6e1e1",
    flexDirection: "column",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#262626",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "#246b7d",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    marginBottom: 4,
  },
  delete: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#f8f8f8',
  },
});

export default ListRecipeComponent;
