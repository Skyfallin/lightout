import React, { useState } from "react";
import { Text, StatusBar, StyleSheet, Picker, Pressable } from "react-native";
import { Formik } from "formik";
import { signInWithPhoneNumber } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { View, TextInput, Logo, Button, FormErrorMessage } from "../components";
import { Images, Colors, auth } from "../config";
import { loginValidationPhone } from "../utils";
import { theme } from "../utils/theme";

export const LoginPhoneScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const handleLogin = (phone) => {
    signInWithPhoneNumber(auth, "+1" + phone, password).catch((error) =>
      setErrorState(error.message)
    );
  };
  return (
    <>
      <View isSafe style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {/* LogoContainer: consits app logo and screen title */}
          <View style={styles.logoContainer}>
            <Logo uri={Images.logo} />
            <Text style={styles.screenTitle}>Lightout</Text>
          </View>
          <Formik
            initialValues={{
              phone: "",
            }}
            validationSchema={loginValidationPhone}
            onSubmit={(values) => handleLogin(values)}
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
                {/* // TODO: inline styles */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: Colors.white,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: Colors.secondary.light,
                      padding: 13,
                      marginRight: 5,
                      width: "15%",
                    }}
                  >
                    <Text
                      style={{ color: Colors.secondary.main, fontSize: 18 }}
                    >
                      +1
                    </Text>
                  </View>
                  {/* Input fields */}
                  <View style={{ flex: 1 }}>
                    <TextInput
                      name="email"
                      leftIconName="pound"
                      placeholder="Phone number"
                      placeholderTextColor="#aaaaaa"
                      autoCapitalize="none"
                      keyboardAppearance="dark"
                      keyboardType="phone-pad"
                      textContentType="emailAddress" // TODO: fix
                      value={values.phone}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                    />
                  </View>
                </View>
                <FormErrorMessage
                  error={errors.phone}
                  visible={touched.phone}
                />
                {errorState !== "" ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                <Button
                  style={[styles.button, theme.shadowProp]}
                  onPress={handleSubmit}
                >
                  <Text style={[styles.buttonText, theme]}>Login</Text>
                </Button>
              </>
            )}
          </Formik>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Pressable
              onPress={() => navigation.navigate("Signup")}
              children={({ pressed }) => (
                <Text
                  style={{
                    ...styles.footerLink,
                    color: pressed
                      ? Colors.primary.main
                      : styles.footerLink.color,
                  }}
                >
                  Sign Up
                </Text>
              )}
            />
          </View>
          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
            children={({ pressed }) => (
              <Text
                style={{
                  ...styles.footerLink,
                  alignSelf: "center",
                  color: pressed
                    ? Colors.primary.main
                    : styles.footerLink.color,
                }}
              >
                Forgot password?
              </Text>
            )}
          />
          <Pressable
            onPress={() => navigation.navigate("LoginEmail")}
            children={({ pressed }) => (
              <Text
                style={{
                  ...styles.footerLink,
                  alignSelf: "center",
                  color: pressed
                    ? Colors.primary.main
                    : styles.footerLink.color,
                }}
              >
                Skip
              </Text>
            )}
          />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.primary.dark,
    paddingTop: 20,
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.orange,
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
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.secondary.dark,
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
