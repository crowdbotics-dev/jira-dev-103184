import React from "react";
import { StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.container} __uuid__="c6c14a65-939e-46ea-a029-e888b5a6364f">
      <View style={styles.content} __uuid__="90814707-fdfa-47ff-9628-f3d05a07cdaa">
        <Text style={styles.title} __uuid__="797bb03b-63d4-45f1-8d0c-f3e454519328">Login</Text>
        <TextInput style={styles.input} placeholder="Email" __uuid__="7099154c-b310-4597-8c88-cd467d2b0657" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} __uuid__="b3070304-ea2c-4f2a-928d-95fda195bd77" />
        <TouchableOpacity style={styles.button} __uuid__="c663e9e5-1b4e-4d38-9efc-2faf9d6d2bf1">
          <Text style={styles.buttonText} __uuid__="43358e56-b564-427a-b4ff-f5713c995fc3">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: "80%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left"
  }
});
export default LoginScreen;