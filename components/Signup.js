import React, { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../firebase';

export default function Signup({navigation}) {
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();

  return (
  // <View>
  //     <Text>Kayıt ol</Text>
      
  //     <TextInput onChangeText={text=>setname(text)} placeholder='isim'></TextInput>
  //     <TextInput onChangeText={text=>setsurname(text)} placeholder='soyisim'></TextInput>
  //     <TextInput onChangeText={text=>setemail(text)} placeholder='email'></TextInput>
  //     <TextInput onChangeText={text=>setpassword(text)} placeholder='şifre'></TextInput>
  //     <Button onPress={()=>{
  //         signup(name,surname,password,email, navigation, dispatch)
        //   navigation.navigate('FieldSelection')
  //     }} title='Kayıt ol'></Button>
  // </View>
  <View style={{zIndex:2,backgroundColor:'#fff', width:"70%",height:'60%',justifyContent:'center',alignItems:'center',borderRadius:20, marginBottom:20, borderWidth:1, borderColor:'#aed1a3'}}>
      <Text style={{position:'absolute', top:20, left:20, fontSize:26}}>Kayıt Ol</Text>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setname(text)} placeholder='isim'></TextInput>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setsurname(text)} placeholder='soyisim'></TextInput>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setemail(text)} placeholder='email'></TextInput>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setpassword(text)} placeholder='şifre'></TextInput>
      <TouchableOpacity onPress={()=>{
        signup(name,surname,password,email, navigation, dispatch)
        navigation.navigate('FieldSelection')
      }} style={{width:'80%', backgroundColor:'#5fd43d', justifyContent:'center', alignItems:'center', paddingVertical:10, position:'absolute', bottom:20,borderRadius:50}}>
        <Text style={{fontSize:20, color:'white'}}>
          Kayıt Ol
        </Text>
      </TouchableOpacity>
      <Image source={require('../assets/leaf.png')} style={{position:'absolute', top:10, right:10}} />
  </View>
  )
}
