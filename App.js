import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import FieldSelectionScreen from "./screens/FieldSelectionScreen";
import TimerScreen from "./screens/TimerScreen";
import TimeSelectionScreen from "./screens/TimeSelectionScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
          <Stack.Screen
            name="FieldSelection"
            component={FieldSelectionScreen}
          />
           <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
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
