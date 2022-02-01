import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function TimeSelectionScreen({ navigation }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [selectedHour, setSelectedHour] = useState(hours);
  const [selectedMinute, setSelectedMinute] = useState(minutes);
  const [hoursDropDown, setHoursDropDown] = useState(false);
  const [minutesDropDown, setMinutesDropDown] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fff6e6",
        paddingHorizontal: 50,
        paddingTop: 30,
      }}
    >
      <View style={{ padding: 10, width: "70%" }}>
        <View
          style={{
            position: "relative",
            overflow: "hidden",
            flexDirection: "row",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            marginVertical: 10,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10 }}
            onPress={() => setHoursDropDown(!hoursDropDown)}
          >
            <Text style={{ fontSize: 20 }}>{selectedHour}</Text>
          </TouchableOpacity>
          {hoursDropDown && (
            <View
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: 50,
                borderWidth: 1,
                zIndex: 2,
                alignItems: "center",
                top: -1,
              }}
            >
              <ScrollView
                style={{ height: 50 }}
                showsVerticalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(0);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(1);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(2);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(3);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(4);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(5);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(6);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>6</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          <Text style={{ fontSize: 20 }}>saat</Text>
        </View>

        <View
          style={{
            position: "relative",
            overflow: "hidden",
            flexDirection: "row",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            marginVertical: 10,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10 }}
            onPress={() => setMinutesDropDown(!minutesDropDown)}
          >
            <Text style={{ fontSize: 20 }}>{selectedMinute}</Text>
          </TouchableOpacity>
          {minutesDropDown && (
            <View
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: 50,
                borderWidth: 1,
                zIndex: 2,
                alignItems: "center",
                top: -1,
              }}
            >
              <ScrollView
                style={{ height: 50 }}
                showsVerticalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(0);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(1);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(20);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(30);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>30</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(40);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>40</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(50);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>50</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          <Text style={{ fontSize: 20 }}>dakika</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',width:"100%", justifyContent:'space-between', alignItems:'center'}}>
      <TouchableOpacity
      style={{paddingVertical:10,paddingHorizontal:20, borderRadius:10}}
        onPress={() =>
          navigation.push("FieldSelection", {
            hours: selectedHour,
            minutes: selectedMinute,
          })
        }
      >
        <Text style={{fontSize:20}}>Bahçeye Dön</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{backgroundColor:'white', paddingVertical:10,paddingHorizontal:20, borderRadius:50, borderColor:'#bdbdbd', borderWidth:1}}
        onPress={() =>
          navigation.navigate("Timer", {
            hours: selectedHour,
            minutes: selectedMinute,
          })
        }
      >
        <Text style={{fontSize:24}}>Devam et</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
