import React, { useState, useContext, useReducer, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRecipes } from "../Redux/RecipesContext";
import { useUser, fetchRecipes } from "../Redux/UserContext";
import ListRecipeComponent from "../Components/ListRecipeComponent";

// async function getRecipes() {
//   const { user } = useUser();

//   if (user) {
//     return await fetchRecipes(user.id);
//   } else {
//     return null;
//   }
// }

const ListRecipesScreen = ({ navigation }) => {
  const { recipes } = useRecipes();

  // useEffect(async () => {
  //   if (user) {
  //     const recipes = await fetchRecipes(user.id);

  //     dispatch({ type: "set", payload: recipes });
  //   }
  // }, [user]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          text="New Recipe"
          onPress={() => navigation.navigate("AddRecipe")}
        >
          <Text
            style={{
              marginRight: 20,
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            New Recipe
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <ListRecipeComponent recipe={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 0,
    backgroundColor: "#f8f8f8",
  },
});

export default ListRecipesScreen;
