import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import SignUp from "./SignUp";

export default function App() {
  const imageUrl = "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
  const imageUrl5 = "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" 
  const imageUrl6 ="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80"
  const imageUrl7 ="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"


  const list = [
    {
      name: "Pastel",
      type: "Cat",
      year: "2 years old",
      location: '93 Accra',
      Img: {uri: imageUrl},
    },
    {
      name: "Raka",
      type: "Dog",
      year: "3 years old",
      location: 'Accra',
      Img: {uri: imageUrl6},
    },
    {
      name: "Jhony",
      type: "Dog",
      year: "1.5 years old",
      location: 'Accra',
      Img: {uri: imageUrl5},
    },
    {
      name: "Seriously",
      type: "Cat",
      year: "1.2 years old",
      location: 'Accra',
      Img: {uri: imageUrl7},
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignUp/> */}
      <View style={{flex: 0.1, justifyContent: 'center', width: '90%',}}>
        <View style={[styles.shadowProp, styles.input]}>
        <FontAwesome style={{left: 5}} name="search" size={20} color="black" />
        <TextInput style={styles.textInput} placeholder="Search" />
        </View>
      </View>
      <View style={styles.list}>
      <FlatList
        data={list}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image
                style={{ width: 150, height: 150, borderRadius: 10, right: 0 }}
                source={item.Img}/>
              <View style={[styles.text, styles.shadowProp]}>
              <View style={styles.textInner}>
                <Text style={[styles.textSpace, { fontSize: 20, fontWeight: "500",}]}>
                  {item.name}
                </Text>
                <Text style={styles.textSpace}>{item.type}</Text>
                <Text style={styles.textSpace}>{item.year}</Text>
                <View style={[styles.textSpace, {flexDirection: 'row', right: 7}]}>
                <EvilIcons name="location" size={24} color="black" />
                <Text>{item.location}</Text>
                </View>
              </View>
              </View>
            </View>
          );
        }}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#D5D5D5',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    height: 35,
    left: 15,
  },
  textInput: {
    padding: 10,
  },

  list: {
    flex: 1,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    flexDirection: "column",
    width: 10,
    flex: 1,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  textInner: {
    height: 100,
    left: 20,
  },

  textSpace: {
    paddingBottom: 5,
  },
});
