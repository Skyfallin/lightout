import { Colors } from "../config";
import { StyleSheet } from "react-native";

export const theme = StyleSheet.create({
  shadowProp: {
    elevation: 6,
    shadowColor: Colors.secondary.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
