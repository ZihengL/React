import * as Notifications from "expo-notifications";

export async function scheduleNotification(username, recipename) {
  //   await Notifications.requestPermissionsAsync();

  try {
    const permission = await Notifications.requestPermissionsAsync();

    if (!permission.granted) {
      console.error("Notification permissions not granted");
      return;
    }

    const result = await Notifications.scheduleNotificationAsync({
      content: {
        title: `Recipe added to user ${username}`,
        body: recipename + " added",
      },
      trigger: {
        seconds: 2,
      },
    });

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
