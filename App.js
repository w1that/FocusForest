import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForestField from './components/ForestField';
import Timer from './components/Timer';

export default function App() {
  return (
    <View style={{justifyContent:'space-around', alignItems:'center',flex:1}}>
      <ForestField/>
    <Timer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
