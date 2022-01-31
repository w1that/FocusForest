import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TimerScreen({navigation, route}) {
  const [hours, setHours] = useState(route.params.hours);
  const [minutes, setMinutes] = useState(route.params.minutes);
  const [milliseconds, setMilliseconds] = useState(route.params.minutes*60000+route.params.hours*3600000);
  const [width, setWidth] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [interval, setinterval] = useState(0);

  const selectedLand = useSelector(state=>state.land.value);
  console.log(selectedLand)

  function fillBar(){
    setinterval(setTimeout(() => {
      setWidth(prev=>prev+1);
      fillBar();
    }, milliseconds/100))
  }

  useEffect(() => {
    
    if(playing){
      fillBar()
    }else{
      clearTimeout(interval)
    }
    
  }, [playing]);
  

  function play (){
   if(!playing){
     setPlaying(true);
   }
   if(playing){
     setPlaying(false);
   }
  }

  useEffect(() => {
    if(width===100){
      clearInterval(interval);
      setPlaying(false);
      alert('Tebrikler')
    }

  }, [width]);
  


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
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
      <View style={{width:'100%', backgroundColor:'gray',borderRadius:20, alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/seed1.gif')} />
      </View>
      <View style={{ backgroundColor: "#f0f0f0", width: "100%", height:5,borderWidth:1, borderRadius:5 }}>
        <View
          style={{ height: "100%", backgroundColor: "yellow", width: `${width}%`,borderRightWidth:1}}
        ></View>
      </View>
      {width !==100?<Button onPress={play} title={playing?'duraklat':'başlat'}></Button>:<Button onPress={()=>navigation.navigate('FieldSelection')} title="Bahçeye dön"></Button>}

    </View>
  );
}
