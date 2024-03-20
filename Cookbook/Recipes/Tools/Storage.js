import React from "react";
import * as SecureStore from "expo-secure-store";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function retrieve(key) {
  let result = await SecureStore.getItemAsync(key);

  if (result) {
    return result;
  } else {
    alert("No values stored under that key.");
  }
}

export async function remove(key) {
  await SecureStore.deleteItemAsync(key);
}

export async function saveToken(user) {
    const id = user.id;

    
}
