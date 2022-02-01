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
  const [lands, setLands] = useState([]);

  const size=240;
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
          transform:[{rotateX:'45deg'},{rotateZ:'45deg'}],
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
