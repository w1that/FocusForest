import React, { useEffect, useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signin } from '../firebase';

export default function Signin({navigation}) {
    const [email, setemail] = useState('');
    const [password, setpassword]= useState('');
    const dispatch = useDispatch();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
      if(email.length===0|| password.length===0){
        setButtonDisabled(true);
      }else{
        setButtonDisabled(false);
      }

    }, [email, password]);
    

  return <View style={{zIndex:2,backgroundColor:'#fff', width:"70%",height:'60%',justifyContent:'center',alignItems:'center',borderRadius:20, marginBottom:20, borderWidth:1, borderColor:'#aed1a3'}}>
      <Text style={{position:'absolute', top:20, left:20, fontSize:26}}>Giriş Yap</Text>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setemail(text)} placeholder='email'></TextInput>
      <TextInput style={{width:'80%', backgroundColor:'#fafafa',fontSize:20, padding:6, marginVertical:4, borderWidth:1, borderColor:'#d9d9d9'}} placeholderTextColor={'#b1b1b1'} onChangeText={(text)=>setpassword(text)} placeholder='şifre'></TextInput>
      <TouchableOpacity onPress={()=>signin(email,password,dispatch, navigation)} style={{width:'80%', backgroundColor:buttonDisabled?'#688f5d':'#5fd43d', justifyContent:'center', alignItems:'center', paddingVertical:10, position:'absolute', bottom:20,borderRadius:50}}>
        <Text style={{fontSize:20, color:'white'}}>
          Giriş
        </Text>
      </TouchableOpacity>
      <Image source={require('../assets/leaf.png')} style={{position:'absolute', top:10, right:10}} />
  </View>
}
