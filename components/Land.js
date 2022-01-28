import React from "react";
import { View } from "react-native";

export default function Land({ selected, land, size }) {
  return (
    <View
      style={{
        width: size/5,
        height: size/5,
        backgroundColor: selected===land.id?'#dbcc25':"#30c96b",
        borderWidth: 2,
        borderColor: selected===land.id?'#a69a1c':"#21a654",
      }}
    />
  );
}
