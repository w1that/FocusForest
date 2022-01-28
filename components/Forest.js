import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Land from "./Land";

export default function Forest() {
  const [lands, setLands] = useState([
    { id: 1, empty: true },
    { id: 2, empty: true },
    { id: 3, empty: true },
    { id: 4, empty: true },
    { id: 5, empty: true },
    { id: 6, empty: true },
    { id: 7, empty: true },
    { id: 8, empty: true },
    { id: 9, empty: true },
    { id: 10, empty: true },
    { id: 11, empty: true },
    { id: 12, empty: true },
    { id: 13, empty: true },
    { id: 14, empty: true },
    { id: 15, empty: true },
    { id: 16, empty: true },
    { id: 17, empty: true },
    { id: 18, empty: true },
    { id: 19, empty: true },
    { id: 20, empty: true },
    { id: 21, empty: true },
    { id: 22, empty: true },
    { id: 23, empty: true },
    { id: 24, empty: true },
    { id: 25, empty: true },
  ]);

  const [selected, setSelected] = useState(-1);
  const [size, setSize] = useState(240);

  return (
    <View>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: "green",
          transform: [{ rotateX: "45deg" }, { rotateZ: "45deg" }],
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {lands.map((land) => (
          <TouchableOpacity disabled={selected===land.id} onPress={()=>setSelected(land.id)}>
              <Land size={size} key={land.id} land={land} selected={selected} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
