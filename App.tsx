import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://reqres.in";

export default function App() {
  const [newValue, setNewValue] = useState<Array<any>>([]);

  const handlePostValue = () => {
    axios({
      method: "post",
      url: `${baseUrl}/api/users`,
      data: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      const tmp = [...newValue];
      tmp.push(response.data);
      setNewValue(tmp);
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${baseUrl}/api/users`,
    }).then((response) => {
      setNewValue(response.data.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        <Button onPress={() => handlePostValue()} title="Post call"></Button>
      </View>
      <ScrollView>
        {newValue?.map((t) => (
          <View>
            <Text>{JSON.stringify(t)}</Text>
          </View>
        ))}
      </ScrollView>
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
