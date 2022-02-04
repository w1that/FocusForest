import React, { useEffect } from "react";
import { View } from "react-native";
import Forest from "./Forest";

export default function ForestField() {
  return (
    <View
      style={{
        width: "90%",
        height: "50%",
        backgroundColor: "#defbff",
        borderWidth: 1,
        borderColor: "#4aedff",
        borderRadius: 20,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Forest />
    </View>
  );
}
