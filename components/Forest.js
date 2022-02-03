import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Button, ImageBackground, Image, Dimensions } from "react-native";
import Land from "./Land";
import { LogBox } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectLand, selectSeed } from "../slices/landSlice";
import { db, getUsersLands, initializeUserLands } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]); // Ignore log notification by message
import Icon from 'react-native-vector-icons/Fontisto'

export default function Forest() {
  const [lands, setLands] = useState([]);
  const size=Dimensions.get('screen').width/1.7;
  const selectedLand = useSelector((state) => state.land.value);
  const user = useSelector(state=>state.user.id)
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);

  


  useEffect(() => {
    updateForest();
  }, []); 

  function updateForest(){
    setLands([]);
    getUsersLands(user,setLands); 
  }

  useEffect(() => {
    if(lands.length===25){
      setRender(true);
    }
  }, [lands]);

  

  return (
    <View style={{width:'100%', justifyContent:'center', alignItems:'center',height:'100%',borderRadius:50}}>
      
      <View  style={{position:'absolute', bottom:10, right:10, flexDirection:'row',justifyContent:'space-evenly', width:'40%'}}>
     
      {selectedLand.plant.id===-1&&<TouchableOpacity onPress={()=>{
        dispatch(selectSeed(2))
      }} style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{width:30}} source={require('../assets/apple-fruit.png')}/>
      </TouchableOpacity>}
      {selectedLand.plant.id===-1&&<TouchableOpacity onPress={()=>{
        dispatch(selectSeed(1))
        }} style={{justifyContent:'center', alignItems:'center'}}>
        
        <Image style={{width:30}} source={require('../assets/lemon-fruit.png')}/>
      </TouchableOpacity>}
      <TouchableOpacity onPress={updateForest} >
        <Icon size={30} name="spinner-refresh" />
      </TouchableOpacity>
      </View>
      
      <ImageBackground style={{width:size, height:size, alignItems:'center', justifyContent:'center',transform:[{rotateX:'45deg'},{rotateZ:'45deg'}],}} source={require('../assets/loading-animation.gif')} >
      <View
        style={{
          width: size,
          height: size,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {render?lands.map((land) => (
          <TouchableOpacity
            disabled={selectedLand === land.id}
            onPress={() => dispatch(selectLand(land))}
          >
            <Land size={size} key={land.id} land={land}/>
          </TouchableOpacity>
        )):<></>}
      </View>
      </ImageBackground>
    </View>
  );
}
