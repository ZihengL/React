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

async function scheduleNotification(username, recipename) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `New recipe added to ${username}`,
      body: recipename,
      data: {},
    },
    trigger: { seconds: 2 },
  });
}

const AddRecipeScreen = ({ navigation }) => {
  const { user } = useUser();
  const { recipes, dispatch } = useRecipes();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity text="Save" onPress={addRecipe}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [user, name, picture, ingredients, instructions, navigation, dispatch]);

  const addRecipe = async () => {
    const recipe = {
      id: Date.now(),
      userId: user.id,
      author: user.username,
      name: name,
      picture: picture,
      ingredients: ingredients,
      instructions: instructions,
    };

    scheduleNotification(user.username, name);
    dispatch({ type: ACTIONS.ADD, payload: recipe });
    // saveRecipes(user.id, recipes);
    navigation.goBack();
  };

  const handleImageTool = async (isTakePhoto) => {
    let result = null;

    if (isTakePhoto) {
      result = await ImageTool.takePhoto();
    } else {
      result = await ImageTool.pickPhoto();
    }

    setPicture(result);
  };

  const handleAddIngredient = (newIngredients) => {
    setIngredients(newIngredients);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "column", gap: 30 }}>
          <View>
            {picture && (
              <Image
                source={{ uri: picture }}
                style={styles.picture}
                resizeMode="cover"
              />
            )}
            <View style={styles.buttonsContainer}>
              <ButtonComponent
                text={(picture ? "Update" : "Take") + " picture"}
                onPress={() => handleImageTool(true)}
              />
              <ButtonComponent
                text={"Browse photos"}
                onPress={() => handleImageTool(false)}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputTitle}>Recipe Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>

          <View>
            <Text style={styles.inputTitle}>Ingredients</Text>
            <IngredientsComponent onStateChange={handleAddIngredient} />
          </View>

          <View>
            <Text style={styles.inputTitle}>Instructions</Text>
            <TextInput
              value={instructions}
              onChangeText={setInstructions}
              style={styles.instructions}
              multiline
              numberOfLines={3}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  picture: {
    flex: 1,
    width: "100%",
    height: calculatedHeight,
    borderRadius: 5,
    borderColor: COLORS.SECONDARY,
  },
  ingredientsButton: {
    width: "100%",
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: COLORS.PRIMARY,
  },
  inputTitle: {
    marginBottom: 10,
    color: COLORS.PRIMARY,
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.PRIMARY,
    color: COLORS.PRIMARY,
  },
  instructions: {
    flex: 1,
    width: "100%",
    padding: 10,
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.PRIMARY,
    color: COLORS.PRIMARY,
  },
});

export default AddRecipeScreen;
