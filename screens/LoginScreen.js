import React, { useState } from "react";
import { Text, StatusBar, StyleSheet } from "react-native";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { View, TextInput, Logo, Button, FormErrorMessage } from "../components";
import { Images, Colors, auth } from "../config";
import { useTogglePasswordVisibility } from "../hooks";
import { loginValidationSchema } from "../utils";

export const LoginScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
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
              email: "",
              password: "",
            }}
            validationSchema={loginValidationSchema}
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
                {/* Input fields */}
                <TextInput
                  name="email"
                  leftIconName="email"
                  placeholder="Email"
                  placeholderTextColor="#aaaaaa"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <FormErrorMessage
                  error={errors.email}
                  visible={touched.email}
                />
                <TextInput
                  name="password"
                  leftIconName="lock"
                  placeholder="Password"
                  placeholderTextColor="#aaaaaa"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardAppearance="dark"
                  secureTextEntry={passwordVisibility}
                  textContentType="password"
                  rightIcon={rightIcon}
                  handlePasswordVisibility={handlePasswordVisibility}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <FormErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                {/* Display Screen Error Mesages */}
                {errorState !== "" ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                {/* Login button */}
                <Button style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </Button>
              </>
            )}
          </Formik>
          <View style={styles.footerView}>
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={styles.footerText}
            >
              Don't have an account?{" "}
              <Text
                onPress={() => navigation.navigate("Signup")}
                style={styles.footerLink}
              >
                Sign up
              </Text>
            </Text>
            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.footerLink}
            >
              Forgot password?
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.secondary.dark,
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
    padding: 10,
    borderRadius: 8,
    elevation: 6,
    shadowColor: Colors.secondary.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
