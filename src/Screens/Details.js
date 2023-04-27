import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import actions from "../redux/actions";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Details({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await actions.getPosts();
        console.log("all posts", res);

        console.log("all postsss: ", res);
        setData(res.data);
      } catch (error) {
        console.log("error raised", error);
      }
    })();
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            localStorage.setItem("item", index + 1);
            navigation.navigate("Home");
          }}
        >
          <Text>{index + 1}</Text>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "26px", fontWeight: "500", marginBottom: 12 }}>
        Titles
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 15 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1.5rem",
    marginBottom: "1.5rem ",
  },
  box: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 5,
  },
});
