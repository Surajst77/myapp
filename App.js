// import axios from "axios";
// import { StatusBar } from "expo-status-bar";
// import React, { useState, useEffect } from "react";
// import actions from "./src/redux/actions";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   TouchableHighlight,
// } from "react-native";

// export default function App() {
//   useEffect(() => {
//     (async () => {
//       try {
//         let res = await actions.getPosts();
//         console.log("all posts", res);
//       } catch (error) {
//         console.log("error raised", error);
//       }
//     })();

//     // actions.getPosts().then((res) => console.log("my data", res));
//   }, []);
//   const deletePost = async () => {
//     try {
//       const res = await actions.deletePost();
//       console.log("Delete Response", res);
//     } catch (error) {
//       console.log("Got Error", error);
//     }
//   };
//   return <View style={styles.container}>{/* <>Hello</> */}</View>;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Mystack from "./navigation/navigate";

// create a component

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Mystack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
