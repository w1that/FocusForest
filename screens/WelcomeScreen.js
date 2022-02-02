import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function WelcomeScreen({ navigation }) {
  const [screen, setScreen] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#fff' }}>
      {screen === 0 ? (
        <Signin navigation={navigation}></Signin>
      ) : (
        <Signup navigation={navigation}></Signup>
      )}
      {screen === 0 ? (
        <View style={{ flexDirection: "row" }}>
          <Text style={{fontSize:16}}>Hesabın yoksa </Text>
          <TouchableOpacity onPress={() => setScreen(1)}>
            <Text style={{ color: "red",fontSize:16 }}>kayıt ol</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <Text style={{fontSize:16}}>Hesabın varsa </Text>
          <TouchableOpacity onPress={() => setScreen(0)}>
            <Text style={{ color: "red",fontSize:16 }}>giriş yap</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ width:500, height:500, borderRadius:400, position:'absolute', top:-200,right:0, borderWidth:5, borderColor:'#dbecff' }}></View>
      <View style={{ width:300, height:300, borderRadius:400, position:'absolute', bottom:-200,right:-100, backgroundColor:'#e3ffdb' }}></View>
    </View>
  );
}
