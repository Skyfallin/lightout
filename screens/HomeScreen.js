import React from "react";
import { StyleSheet, Button, Text } from "react-native";
import { View } from "../components";
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleLogout} />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
