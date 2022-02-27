import React from "react";
import { StyleSheet, Text } from "react-native";
import { View, Button, DropDownPicker, Logo, Icon } from "../components";
import { Images, Colors, auth } from "../config";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../utils/theme";

export const FriendsScreen = () => {

  return (
    <View isSafe style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <Button style={[styles.button, theme.shadowProp]}>
          <Icon library= 'MaterialIcons' name='person' size='24' color='black'></Icon>
        </Button>
        <Button style={[styles.button, theme.shadowProp]}>
          <Icon name='map-marker' size='24' color='black'></Icon>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.primary.main,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
});
