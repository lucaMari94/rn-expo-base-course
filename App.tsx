import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Hello world!</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
