import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import Land from "./Land";
import { LogBox } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectLand } from "../slices/landSlice";
import { db, getUsersLands, initializeUserLands } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]); // Ignore log notification by message

export default function Forest() {
  const [lands, setLands] = useState([
    // { id: 1, plant: { id: 2, level: 5 } },
    // { id: 2, plant: { id: 1, level: 4 } },
    // { id: 3, plant: { id: 3, level: 3 } },
    // { id: 4, plant: { id: 1, level: 2 } },
    // { id: 5, plant: { id: 1, level: 1 } },
    // { id: 6, plant: { id: 1, level: 5 } },
    // { id: 7, plant: { id: -1, level: 5 } },
    // { id: 8, plant: { id: -1, level: -1 } },
    // { id: 9, plant: { id: -1, level: -1 } },
    // { id: 10, plant: { id: -1, level: -1 } },
    // { id: 11, plant: { id: -1, level: -1 } },
    // { id: 12, plant: { id: -1, level: -1 } },
    // { id: 13, plant: { id: -1, level: -1 } },
    // { id: 14, plant: { id: -1, level: -1 } },
    // { id: 15, plant: { id: -1, level: -1 } },
    // { id: 16, plant: { id: -1, level: -1 } },
    // { id: 17, plant: { id: -1, level: -1 } },
    // { id: 18, plant: { id: -1, level: -1 } },
    // { id: 19, plant: { id: -1, level: -1 } },
    // { id: 20, plant: { id: -1, level: -1 } },
    // { id: 21, plant: { id: -1, level: -1 } },
    // { id: 22, plant: { id: -1, level: -1 } },
    // { id: 23, plant: { id: -1, level: -1 } },
    // { id: 24, plant: { id: -1, level: -1 } },
    // { id: 25, plant: { id: -1, level: -1 } },
  ]);

  const size=260;
  const selectedLand = useSelector((state) => state.land.value);
  const user = useSelector(state=>state.user.id)
  const dispatch = useDispatch();


  useEffect(() => {
    setLands([]);
    getUsersLands(user,setLands); 
  }, []); 
  


  return (
    <View>
      
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: "green",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {lands.map((land) => (
          <TouchableOpacity
            disabled={selectedLand === land.id}
            onPress={() => dispatch(selectLand(land))}
          >
            <Land size={size} key={land.id} land={land}/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
