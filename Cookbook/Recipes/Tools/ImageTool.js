import * as ImagePicker from "expo-image-picker";

export async function requestPermission() {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (!permissionResult.granted) {
    Alert.alert(
      "Insufficient permission!",
      "You need to grant camera access to use this app"
    );
  }

  return permissionResult.granted;
}

export async function takePhoto() {
  if (!(await requestPermission())) {
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  return result.assets ? result.assets[0].uri : null;
}

export async function pickPhoto() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  return result.assets ? result.assets[0].uri : null;
}
