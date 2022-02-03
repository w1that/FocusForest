import React, { useState } from "react";
import {
  Dimensions,
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
      <View style={{ padding: 10, width: "90%" }}>
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
            paddingHorizontal:20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10, width:'40%', justifyContent:'center', alignItems:'center' }}
            onPress={() => setHoursDropDown(!hoursDropDown)}
          >
            <Text style={{ fontSize: 20 }}>{selectedHour}</Text>
          </TouchableOpacity>
          {hoursDropDown && (
            <View
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: '38%',
                left:'10%',
                borderWidth: 1,
                zIndex: 2,
                alignItems: "center",
                top: -1,
              }}
            >
              <ScrollView
                style={{ height: 50, width:"100%" }}
                contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
                showsVerticalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(0);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(1);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(2);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(3);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(4);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(5);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setHoursDropDown(!hoursDropDown);
                    setSelectedHour(6);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
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
            justifyContent: "space-between",
            paddingHorizontal:20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10, width:'40%', justifyContent:'center', alignItems:'center' }}
            onPress={() => setMinutesDropDown(!minutesDropDown)}
          >
            <Text style={{ fontSize: 20 }}>{selectedMinute}</Text>
          </TouchableOpacity>
          {minutesDropDown && (
            <View
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: '38%',
                borderWidth: 1,
                left:'10%',
                zIndex: 2,
                alignItems: "center",
                top: -1,
              }}
            >
              <ScrollView
                style={{ height: 50, width:'100%' }}
                showsVerticalScrollIndicator={false}
              >
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(0);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}

                >
                  <Text style={{ fontSize: 20 }}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(1);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(20);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(30);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>30</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(40);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>40</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMinutesDropDown(!minutesDropDown);
                    setSelectedMinute(50);
                  }}
                  style={{backgroundColor:'#e0e0e0', width:'100%', justifyContent:'center', alignItems:'center',borderBottomWidth:1}}
                >
                  <Text style={{ fontSize: 20 }}>50</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          <Text style={{ fontSize: 20 }}>dakika</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',width:Dimensions.get('screen').width, justifyContent:'space-around', alignItems:'center'}}>
      <TouchableOpacity
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
      style={{backgroundColor:'white' ,paddingVertical:10,paddingHorizontal:20, borderRadius:50, borderColor:'#bdbdbd', borderWidth:1,width:'40%',alignItems:'center'}}
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
