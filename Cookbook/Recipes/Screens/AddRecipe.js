import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { RNCamera } from "react-native-camera";
import { useUser } from "../Redux/UserContext";
import { useRecipes } from "../Redux/RecipesContext";
import { ACTIONS } from "../Redux/RecipesReducer";
import ButtonComponent from "../Components/ButtonComponent";

import * as Notifications from "expo-notifications";
import * as ImagePicker from "expo-image-picker";

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
  const { dispatch } = useRecipes();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(`You've refused to allow this app to access your camera!`);
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setPicture(result.assets[0].uri);
    }
  };

  const pickPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPicture(result.assets[0].uri);
    }
  };

  const addRecipe = () => {
    const recipe = {
      id: Date.now(),
      author: user.username,
      name,
      picture,
      ingredients,
      instructions,
    };

    scheduleNotification(user.username, name);
    dispatch({ type: ACTIONS.ADD, payload: recipe });
    navigation.goBack();
  };

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton} onPress={addRecipe}>
          <Text style={{ fontSize: 15, marginRight: 20, }}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>NEW RECIPE</Text> */}
      {/* <ButtonComponent text={"Save"} onPress={addRecipe} /> */}

      {picture && (
        <Image
          source={{ uri: picture }}
          style={styles.picture}
          resizeMode="contain"
        />
      )}
      <View style={{ flexDirection: "row", padding: 20 }}>
        <ButtonComponent
          text={picture ? "Update picture" : "Take a picture"}
          onPress={takePhoto}
          containerStyle={styles.pictureButtons}
        />
        <ButtonComponent
          text={"Choose a picture"}
          onPress={pickPhoto}
          containerStyle={styles.pictureButtons}
        />
      </View>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Ingredients"
        value={ingredients}
        onChangeText={setIngredients}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        style={styles.instructions}
        multiline
        numberOfLines={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 30,
    justifyContent: "start",
    alignItems: "center",
  },
  // headerButton: {
  //   height: 20,
  //   width: 50,
  //   padding: 30,
  //   // justifyContent: "start",
  //   // alignItems: "right",
  // },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  title: {
    width: "100%",
    margin: 40,
    color: "#246b7d",
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  picture: {
    width: "100%",
    height: 300,
    margin: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    width: "100%",
    marginBottom: 16,
    color: "#246b7d",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  pictureButtons: {
    width: '50%',
    backgroundColor: '#246b7d',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    // marginTop: 20,
  },
  instructions: {
    flex: 1,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    color: "#246b7d",
    padding: 8,
    textAlignVertical: "top",
  },
});

export default AddRecipeScreen;
