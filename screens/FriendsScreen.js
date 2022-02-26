import React from "react";
import { StyleSheet, Text } from "react-native";
import { View, Button, DropDownPicker, Logo } from "../components";

import { theme } from "../utils/theme";

export const FriendsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Friends</Text>
      <Button
        style={[styles.button, theme.shadowProp]}
      >
        <Text style={[styles.buttonText, theme]}>Login</Text>
      </Button>
      <Logo></Logo>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
