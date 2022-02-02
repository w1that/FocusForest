import React from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";

export default function Land({ land, size }) {
  const selectedLand = useSelector((state) => state.land.value);

  return (
    <View
      style={{
        width: size / 5,
        height: size / 5,
        backgroundColor: selectedLand.id === land.id ? "#dbcc25" : "#30c96b",
        borderWidth: 2,
        borderColor: selectedLand.id === land.id ? "#a69a1c" : "#21a654",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!land.plant.id ? (
        <></>
      ) : (
        <View
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            alignItems: "center",
            transform: [{ rotateZ: "315deg" }],
            justifyContent: "center",
          }}
        >
          {(land.plant.level === 1 && (
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                transform: [{ rotateY: "45deg" }],
                height: 64,
                transform: [{ rotateY: "45deg" }],
                width: 64,
              }}
              source={require("../assets/seed1.png")}
            ></Image>
          )) ||
            (land.plant.level === 2 && (
              <Image
                style={{
                  position: "absolute",
                  bottom: -10,
                  height: 64,
                  transform: [{ rotateY: "45deg" }],
                  width: 64,
                }}
                source={require("../assets/seed2-animation.gif")}
              ></Image>
            )) ||
            (land.plant.level === 3 && (
              <Image
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 64,
                  transform: [{ rotateY: "45deg" }],
                  width: 64,
                }}
                source={require("../assets/sapling1-animation.gif")}
              ></Image>
            )) ||
            (land.plant.level === 4 && (
              <Image
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 100,
                  transform: [{ rotateY: "45deg" }],
                  width: 100,
                }}
                source={require("../assets/sapling2-animation.gif")}
              ></Image>
            )) ||
            (land.plant.level === 5 && land.plant.id === 1 && (
              <Image
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 100,
                  transform: [{ rotateY: "45deg" }],
                  width: 100,
                }}
                source={require("../assets/lemon-animation.gif")}
              ></Image>
            )) ||
            (land.plant.id === 2 && (
              <Image
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 100,
                  transform: [{ rotateY: "45deg" }],
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
