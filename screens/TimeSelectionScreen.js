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
        backgroundColor: "#e0e0e0",
        paddingHorizontal: 50,
        paddingTop: 30,
      }}
    >
      <View>
      <View style={{ position: "relative" }}>
        <TouchableOpacity onPress={() => setHoursDropDown(!hoursDropDown)}>
          <Text>{selectedHour}</Text>
        </TouchableOpacity>
        {hoursDropDown && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: 100,
              zIndex: 2,
            }}
          >
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(0);
                }}
              >
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(1);
                }}
              >
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(2);
                }}
              >
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(3);
                }}
              >
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(4);
                }}
              >
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(5);
                }}
              >
                <Text>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHoursDropDown(!hoursDropDown);
                  setSelectedHour(6);
                }}
              >
                <Text>6</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
        <Text>saat</Text>
      </View>

      <View style={{ position: "relative" }}>
        <TouchableOpacity onPress={() => setMinutesDropDown(!minutesDropDown)}>
          <Text>{selectedMinute}</Text>
        </TouchableOpacity>
        {minutesDropDown && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: 100,
              zIndex: 2,
            }}
          >
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                  setSelectedMinute(0)
                }}
              >
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                  setSelectedMinute(1);
                }}
              >
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                  setSelectedMinute(10);
                }}
              >
                <Text>10</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                    setSelectedMinute(20);
                }}
              >
                <Text>20</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                    setSelectedMinute(30);
                }}
              >
                <Text>30</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                    setSelectedMinute(40);
                }}
              >
                <Text>40</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    setMinutesDropDown(!minutesDropDown)
                    setSelectedMinute(50);
                }}
              >
                <Text>50</Text>
              </TouchableOpacity>
              
            </ScrollView>
          </View>
        )}
        <Text>dakika</Text>
      </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Timer',{hours:selectedHour, minutes:selectedMinute})}><Text>Devam et</Text></TouchableOpacity>
    </View>
  );
}
