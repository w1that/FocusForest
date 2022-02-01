import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

export default function WelcomeScreen({navigation}) {
    const [screen, setScreen] = useState(0);
  return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {screen===0?<Signin navigation={navigation}></Signin>:<Signup navigation={navigation}></Signup>}
      {screen===0?<View style={{flexDirection:'row'}}>
      <Text>Hesabın yoksa </Text><TouchableOpacity onPress={()=>setScreen(1)}><Text style={{color:'red'}}>kayıt ol</Text></TouchableOpacity>
      </View>:<View style={{flexDirection:'row'}}>
      <Text>Hesabın varsa </Text><TouchableOpacity onPress={()=>setScreen(0)}><Text style={{color:'red'}}>giriş yap</Text></TouchableOpacity>
      </View>}
  </View>
}
