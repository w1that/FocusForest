import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";

export default function TimerScreen({navigate, route}) {
  const [hours, setHours] = useState(route.params.hours);
  const [minutes, setMinutes] = useState(route.params.minutes);

  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0e0e0",
        paddingHorizontal: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-evenly",
          backgroundColor: "purple",
          padding: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          {hours} saat
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>{minutes} dakika</Text>
      </View>
      <View style={{ backgroundColor: "#f0f0f0", width: "100%", height: 3 }}>
        <View
          style={{ height: "100%", backgroundColor: "black", width: "5%" }}
        ></View>
      </View>
    </View>
  );
}
