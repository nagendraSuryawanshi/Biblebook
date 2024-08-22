import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const HandleSignUp = () => {
    router.navigate('/signup');
  }
  return (
    <View style={styles.container}>
      {/* <Image source={require("@/assets/images/holy-bible-xxl.png")} ></Image> */}
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter you name"
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter your email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}

          placeholder="Enter password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}

          placeholder="Enter confirm password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setConfirmPassword(text)} />
      </View>


      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.signupText} onPress={HandleSignUp}>Signup</Text>
      </TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "purple",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,

  },
  forgot: {
    color: "purple",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "purple",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  signupText: {
    color: "white"
  }
});