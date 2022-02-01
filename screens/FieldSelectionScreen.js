import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import ForestField from "../components/ForestField";
import { getUsersLands } from "../firebase";

export default function FieldSelectionScreen({navigation}) {
  const land =  useSelector(state=>state.land.value);

  
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ForestField />
      <View style={{flex:0.6,alignItems:'center',justifyContent:'center' }}>
      {land===-1?<Text style={{ fontSize: 30, paddingHorizontal: 20, }}>
        Geliştirmek istediğin alanı seç ve çalışmaya başla.
      </Text >:<TouchableOpacity onPress={()=> navigation.navigate('TimeSelection')} style={{ borderWidth:1, borderRadius:100, padding:6}}><Text style={{ fontSize: 30, paddingHorizontal: 20 }}>Devam et</Text></TouchableOpacity>}
      </View>
      
    </View>
  );
}
