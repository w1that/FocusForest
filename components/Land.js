import React from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";

export default function Land({ selected, land, size }) {
  const selectedLand = useSelector((state) => state.land.value);

  return (
    <View
      style={{
        width: size / 5,
        height: size / 5,
        backgroundColor: selectedLand === land.id ? "#dbcc25" : "#30c96b",
        borderWidth: 2,
        borderColor: selectedLand === land.id ? "#a69a1c" : "#21a654",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {land.plant.id=== -1 ? (
        <></>
      ) : (
        <View
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            transform: [{ rotateZ: "315deg" }],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         

          
          {(land.plant.level===1&& (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 100,
                width: 100,
              }}
              source={require("../assets/seed1.png")}
            ></Image>
          ))||(land.plant.level===2&& (
            <Image
              style={{
                position: "absolute",
                bottom: -10,
                transform: [{ rotateY: "45deg" }],
                height: 64,
                width: 64,
              }}
              source={require("../assets/seed2.png")}
            ></Image>
          ))||(land.plant.level===3&& (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 64,
                width: 64,
              }}
              source={require("../assets/sapling1.png")}
            ></Image>
          ))||(land.plant.level===4&& (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 100,
                width: 100,
              }}
              source={require("../assets/sapling2.png")}
            ></Image>
          ))||(land.plant.level===5&&land.plant.id===1&& (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 100,
                width: 100,
              }}
              source={require("../assets/lemon-animation.gif")}
            ></Image>
          )||land.plant.id===2&& (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 100,
                width: 100,
              }}
              source={require("../assets/tree-animation.gif")}
            ></Image>
          ))}
        </View>
      )}
    </View>
  );
}
