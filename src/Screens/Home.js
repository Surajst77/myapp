import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import axios from "axios";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let id = localStorage.getItem("item");

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id + ""
    );
    console.log("comoo", res);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text
        style={{ alignSelf: "center", fontSize: "1.5rem", padding: "12px" }}
      >
        Body of the Title: {data.id}
      </Text>
      <View style={styles.container}>
        <Text>{data.title}</Text>
        <Text style={{ marginBottom: "15px" }}>{data.body}</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
