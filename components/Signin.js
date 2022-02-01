import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signin } from '../firebase';

export default function Signin({navigation}) {
    const [email, setemail] = useState('');
    const [password, setpassword]= useState('');
    const dispatch = useDispatch();

  return <View>
      <Text>Giriş Yap</Text>
      <TextInput onChangeText={(text)=>setemail(text)} placeholder='email'></TextInput>
      <TextInput onChangeText={(text)=>setpassword(text)} placeholder='şifre'></TextInput>
      <Button onPress={()=>signin(email,password,dispatch, navigation)} title='Giriş'></Button>
      
  </View>
}
