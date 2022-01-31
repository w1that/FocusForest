import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import FieldSelectionScreen from "./screens/FieldSelectionScreen";
import TimerScreen from "./screens/TimerScreen";
import TimeSelectionScreen from "./screens/TimeSelectionScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //     <Provider store={store}>
    // <View style={{justifyContent:'space-around', alignItems:'center',flex:1}}>
    //      <FieldSelectionScreen/>
    //     </View>
    //     </Provider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="FieldSelection">
          <Stack.Screen
            name="FieldSelection"
            component={FieldSelectionScreen}
          />
          <Stack.Screen
            name="Timer"
            component={TimerScreen}
          />
          <Stack.Screen
            name="TimeSelection"
            component={TimeSelectionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
