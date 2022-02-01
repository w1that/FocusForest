import React, { useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, getUsersLands, handleLevel } from "../firebase";
import { LogBox } from "react-native";
import { doc, runTransaction } from "firebase/firestore";
import { selectLand } from "../slices/landSlice";
LogBox.ignoreLogs(["Setting a timer for a long period of time"]); // Ignore log notification by message

export default function TimerScreen({ navigation, route }) {
  const [hours, setHours] = useState(route.params.hours);
  const [minutes, setMinutes] = useState(route.params.minutes);
  const [milliseconds, setMilliseconds] = useState(
    route.params.minutes * 60000 + route.params.hours * 3600000
  );
  const [width, setWidth] = useState(97);
  const [playing, setPlaying] = useState(false);
  const [interval, setinterval] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const selectedLand = useSelector((state) => state.land.value);
  const dispatch = useDispatch();


  function fillBar() {
    setinterval(
      setTimeout(() => {
        setWidth((prev) => prev + 1);
        fillBar();
      }, milliseconds / 100)
    );
  }

  useEffect(() => {
    if (playing) {
      fillBar();
    } else {
      clearTimeout(interval);
    }
  }, [playing]);

  function play() {
    if (!playing) {
      setPlaying(true);
    }
    if (playing) {
      setPlaying(false);
    }
  }

  useEffect(() => {
    if (width === 100) {
      handleLevel(selectedLand.id);
      clearInterval(interval);
      setPlaying(false);
      setTimeout(() => {
        setDisabledButton(false);
      }, 1000);
    }
  }, [width]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#f4e6ff",
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
      <View
        style={{
          width: "100%",
          backgroundColor: "gray",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/seed1.gif")} />
      </View>
      <View
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          height: 5,
          borderWidth: 1,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            height: "100%",
            backgroundColor: width === 100 ? "green" : "yellow",
            width: `${width}%`,
            borderRightWidth: 1,
          }}
        ></View>
      </View>
      {width !== 100 ? (
        // <Button onPress={play} title={playing ? "duraklat" : "başlat"}></Button>
        playing?<TouchableOpacity onPress={play} style={{backgroundColor:'#deba3a', paddingVertical:10, paddingHorizontal:20, borderRadius:50, width:"50%", alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20, color:'white'}}>Durakla</Text>
      </TouchableOpacity >:<TouchableOpacity onPress={play} style={{backgroundColor:'#0e9e1d', paddingVertical:10, paddingHorizontal:20, borderRadius:50, width:"50%", alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20, color:'white'}}>Başla</Text>
        </TouchableOpacity>
      ) : (
        // <Button
        //   disabled={disabledButton}
          // onPress={() => {
          //   navigation.push("FieldSelection")
          //   dispatch(selectLand({}));
          // }}
        //   title="Bahçeye dön"
        // ></Button>
        <TouchableOpacity onPress={() => {
          navigation.push("FieldSelection")
          dispatch(selectLand({}));
        }} style={{backgroundColor:'purple', paddingVertical:10, paddingHorizontal:20, borderRadius:50}}>
          <Text style={{fontSize:20, color:'white'}}>Bahçeye dön</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
