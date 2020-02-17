import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";

function Home(props) {
  return (
    <View style={styles.container}>
      <LoginForm style={styles.layer1}></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layer1: {
    width: 300,
    height: 191,
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 150,
    marginLeft: 38
  }
});

export default Home;
