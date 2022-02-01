import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../firebase';

export default function Signup({navigation}) {
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();

  return <View>
      <Text>Kayıt ol</Text>
      
      <TextInput onChangeText={text=>setname(text)} placeholder='isim'></TextInput>
      <TextInput onChangeText={text=>setsurname(text)} placeholder='soyisim'></TextInput>
      <TextInput onChangeText={text=>setemail(text)} placeholder='email'></TextInput>
      <TextInput onChangeText={text=>setpassword(text)} placeholder='şifre'></TextInput>
      <Button onPress={()=>{
          signup(name,surname,password,email, navigation, dispatch)
        //   navigation.navigate('FieldSelection')
      }} title='Kayıt ol'></Button>
  </View>
}
