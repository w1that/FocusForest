import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Land({ selected, land, size }) {
  const selectedLand = useSelector(state=>state.land.value);
  return (
    <View
      style={{
        width: size/5,
        height: size/5,
        backgroundColor:selectedLand===land.id?'#dbcc25':"#30c96b",
        borderWidth: 2,
        borderColor: selectedLand===land.id?'#a69a1c':"#21a654",
        justifyContent:'center',alignItems:'center'
      }}
    >
      <View style={{width:20, height:20, position:'absolute', transform:[{rotateZ:'315deg'}], alignItems:'center', justifyContent:'center'}}>
      <Image style={{}} source={require('../assets/tree.png')}></Image>
      </View>
      
    </View>
  );
}
