import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View , TextInput, TouchableOpacity} from "react-native";

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.title}>
          <Text style={{
              fontSize: 50,
              right: 50,
              color: "#5F2585",
              fontWeight: "400", }}
          >
            Sign Up
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput style={styles.inputs} placeholder="Username" />
          <TextInput style={styles.inputs} placeholder="Email" />
          <TextInput style={styles.inputs} placeholder="Password" />
          <TextInput style={styles.inputs} placeholder="Password again" />
          <Text style={{ color: "blue", top: 8, left: 60 }}>
            Forgot Password?
          </Text>
        </View>
        <View style={styles.log}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>UPDATE PROFILE</Text>
          </TouchableOpacity>
          <Text style={{ top: 20 }}>
            Don't have account?{" "}
            <Text style={{ color: "#5F2585" }}>Sgin up</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  title: {
   flex: 0.3,
   marginTop: 20,
   alignItems: 'center',
   justifyContent: 'center', 
 },
 input: {
   flex: 0.5,
   backgroundColor: 'white',
   alignItems: 'center',
 },
 inputs: {
   fontSize: 20,
   borderBottomWidth: 1.5,
   borderBottomColor: '#5F2585',
   width: 250,
   height: 70,
 },
 log: {
   flex: 0.6,
   alignItems: 'center', 
   alignItems: 'center',
   justifyContent: 'center',
 },
 
 button: {
   flex: 0.2,
   width: 250,
   alignItems: "center",
   justifyContent: "center",
   backgroundColor: "#5F2585",
   borderRadius: 10,
 },
});
