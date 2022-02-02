import React, { useEffect } from "react";
import {Button, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import ForestField from "../components/ForestField";

export default function FieldSelectionScreen({ navigation }) {
  const land = useSelector((state) => state.land.value);
  const seed = useSelector(state=>state.land.seed);

  
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#ebfdff'
      }}
    >
      <ForestField />
      <View
        style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
      >
        {land.id===-1  ? (
          <Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>
            Geliştirmek istediğin alanı seç ve çalışmaya başla.
          </Text>
        ) : seed===-1?<Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>Büyütmek istediğin ağaç türünü seç</Text>:(
          <TouchableOpacity
            onPress={() => navigation.navigate("TimeSelection")}
            style={{ borderWidth: 1, borderRadius: 100, padding: 6, borderColor:'#bdbdbd', backgroundColor:'white' }}
          >
            <Text style={{ fontSize: 30, paddingHorizontal: 20 }}>
              Devam et
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
