import React from "react";
import { StyleSheet, Text } from "react-native";
import { View, Button, DropDownPicker, Logo } from "../components";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../utils/theme";

export const FriendsScreen = () => {

  return (
    <View isSafe style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
