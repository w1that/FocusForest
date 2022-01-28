import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Forest from "./Forest";

export default function ForestField() {
  console.log('forestField')
  return (
    <View
      style={{
        width: "90%",
        height: "50%",
        backgroundColor: "#e0e0e0",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Forest />

     
     
    </View>
  );
}
