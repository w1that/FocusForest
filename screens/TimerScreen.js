import React, { useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, getUsersLands, handleLevel } from "../firebase";
import { LogBox } from "react-native";
import { doc, runTransaction } from "firebase/firestore";
import { selectLand, selectSeed } from "../slices/landSlice";
import Icon from "react-native-vector-icons/Entypo";
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
  const seed = useSelector(state=>state.land.seed);


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
      handleLevel(selectedLand.id, seed);
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
          width: "84%",
          justifyContent: "space-evenly",
          backgroundColor: "purple",
          padding: 10,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
            fontFamily: "monospace",
          }}
        >
          {hours} saat
        </Text>

        <Text style={{ color: "white", fontSize: 20, fontFamily: "monospace" }}>
          {minutes} dakika
        </Text>
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
        playing ? (
          
            <TouchableOpacity
              onPress={play}
              style={{
                backgroundColor: "#deba3a",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 50,
                width: "60%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontFamily: "monospace",
                }}
              >
                Durakla
              </Text>
            </TouchableOpacity>
        ) : (
          <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:'stretch', width:'100%'}}>
          <TouchableOpacity onPress={()=>{
            dispatch(selectSeed(-1));
            dispatch(selectLand({id:-1, plant:{id:-2,level:-2}}));
            setWidth(0);
            clearTimeout(interval);
            navigation.push("FieldSelection");
          }} style={{backgroundColor:'red', paddingVertical:10, paddingHorizontal:20, borderRadius:50, justifyContent:'center', alignItems:'center'}}>
            <Icon name="cross" color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={play}
            style={{
              backgroundColor: "#0e9e1d",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 50,
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, color: "white", fontFamily: "monospace" }}
            >
              Başla
            </Text>
          </TouchableOpacity>
          </View>
        )
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.push("FieldSelection");
            dispatch(selectSeed(-1))
            dispatch(selectLand({id:-1, plant:{id:-2,level:-2}}));
          }}
          style={{
            backgroundColor: "purple",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
          }}
        >
          <Text
            style={{ fontSize: 20, color: "white", fontFamily: "monospace" }}
          >
            Bahçeye dön
          </Text>
        </TouchableOpacity>
       
      )}
    </View>
  );
}
