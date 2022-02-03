import React, { useEffect } from "react";
import {Button, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import ForestField from "../components/ForestField";
import { selectLand, selectSeed } from "../slices/landSlice";
import { setCurrentUser } from "../slices/userSlice";

export default function FieldSelectionScreen({ navigation }) {
  const land = useSelector((state) => state.land.value);
  const seed = useSelector(state=>state.land.seed);
  const dispatch = useDispatch();


  function handleQuit(){
    navigation.navigate('Welcome');
    dispatch(setCurrentUser(''));
    dispatch(selectLand({id:-1, plant:{id:-2,level:-2}}));
    dispatch(selectSeed(-1));
  }
  

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

      <TouchableOpacity onPress={handleQuit} style={{ position:'absolute', top:10, right:10, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, marginRight:10}}>Çıkış</Text> 
        <View>
        <Icon name="exit-outline" size={30}/>
        </View>
      </TouchableOpacity>      

      <ForestField />
      <View
        style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
      >
        {land.id===-1  ? (
          <Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>
            Geliştirmek istediğin alanı seç ve çalışmaya başla.
          </Text>
        ) : seed===-1&&land.plant.level===0?<Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>Büyütmek istediğin ağaç türünü seç</Text>:(
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
