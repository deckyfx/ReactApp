import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialButtonViolet1 from "./MaterialButtonViolet1";

function LoginForm(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Username" style={styles.textInput3}></TextInput>
      <TextInput
        placeholder="Password"
        editable={true}
        secureTextEntry={true}
        style={styles.textInput1}
      ></TextInput>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  textInput3: {
    width: 276,
    height: 50,
    color: "#121212",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    fontFamily: "roboto-regular"
  },
  textInput1: {
    width: 276,
    height: 50,
    color: "#121212",
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    fontFamily: "roboto-regular"
  },
  materialButtonViolet1: {
    width: 100,
    height: 36,
    alignSelf: "center",
    marginTop: 10
  }
});

export default LoginForm;
