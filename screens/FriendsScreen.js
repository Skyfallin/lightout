import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { View, Button, DropDownPicker, Logo, Icon } from "../components";
import { Images, Colors, auth } from "../config";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../utils/theme";
import { CurrentRenderContext } from "@react-navigation/native";

export const FriendsScreen = () => {

  return (
    <View isSafe style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.doubleButton}>
          <Button style={styles.nearbyTab}>
            <Icon library='MaterialIcons' name='person' size='24' color='black'></Icon>
          </Button>
          <View style={styles.verticalLine}></View>
          <Button style={[styles.nearbyTab, theme.shadowProp]}>
            <Icon name='map-marker' size='24' color='black'></Icon>
          </Button>
        </View>
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

  nearbyTab: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: Colors.primary.main,
    height: '100%',
    width: '50%',
    alignItems: 'center',
  },

  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#cccccc',
  },

  doubleButton: {
    flexDirection: 'row',
  }
});
