import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";

import { passwordResetSchema } from "../utils";
import { Colors, auth } from "../config";
import { View, TextInput, Button, FormErrorMessage } from "../components";
import { theme } from "../utils/theme";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const handleSendPasswordResetEmail = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Success: Password Reset Email sent.");
        navigation.navigate("LoginPhone");
      })
      .catch((error) => setErrorState(error.message));
  };

  return (
    <View isSafe style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.screenTitle}>Reset your password</Text>
        {/* </View> */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={passwordResetSchema}
          onSubmit={(values) => handleSendPasswordResetEmail(values)}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              {/* Email input field */}
              <TextInput
                name="email"
                leftIconName="email"
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <FormErrorMessage error={errors.email} visible={touched.email} />
              {/* Display Screen Error Mesages */}
              {errorState !== "" ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}
              {/* Password Reset Send Email  button */}
              <Button
                style={[styles.button, theme.shadowProp]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Send Reset Email</Text>
              </Button>
            </>
          )}
        </Formik>
        {/* Button to navigate to Login screen */}
        <Pressable
          onPress={() => navigation.navigate("LoginPhone")}
          children={({ pressed }) => (
            <Text
              style={{
                ...styles.footerLink,
                color: pressed ? Colors.primary.main : styles.footerLink.color,
              }}
            >
              Return to Login
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.secondary.dark,
    paddingTop: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.primary.main,
    padding: 11,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
  },
  footerLink: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary.dark,
    fontWeight: "bold",
    fontSize: 16,
  },
});
