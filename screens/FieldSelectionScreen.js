import React, { useEffect, useState } from "react";
import {Text, TouchableOpacity, View,Modal, ScrollView} from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import ForestField from "../components/ForestField";
import { selectLand, selectSeed } from "../slices/landSlice";
import { setCurrentUser } from "../slices/userSlice";
var Sound = require('react-native-sound');

export var whoosh = new Sound('ambience.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  whoosh.setNumberOfLoops(-1);
});


export default function FieldSelectionScreen({ navigation }) {
  const land = useSelector((state) => state.land.value);
  const seed = useSelector(state=>state.land.seed);
  const [modalVisible, setModalVisible] = useState(false);
  const [policiesVisible, setPoliciesVisible] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    whoosh.play();
  }, []);

  function handleQuit(){
    whoosh.stop();
    dispatch(setCurrentUser(''));
    dispatch(selectLand({id:-1, plant:{id:-2,level:-2}}));
    dispatch(selectSeed(-1));
    navigation.navigate('Welcome');
  }

  

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#ebfdff'
      }}
    >


      <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={{ position:'absolute', top:20, right:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, marginRight:10}}>Ayarlar</Text> 
        <View>
        <Icon name="settings-outline" size={30}/>
        </View>
      </TouchableOpacity>      

      <ForestField />
      
      <View
        style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
      >
        {land.id===-1  ? (
          <Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>
            Geli??tirmek istedi??in alan?? se?? ve ??al????maya ba??la.
          </Text>
        ) : seed===-1&&land.plant.level===0?<Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>B??y??tmek istedi??in a??a?? t??r??n?? se??</Text>:(
          <TouchableOpacity
            onPress={() => {
              whoosh.stop();
              navigation.navigate("TimeSelection")
            }}
            style={{ borderWidth: 1, borderRadius: 100, padding: 6, borderColor:'#bdbdbd', backgroundColor:'white' }}
          >
            <Text style={{ fontSize: 30, paddingHorizontal: 20 }}>
              Devam et
            </Text>
          </TouchableOpacity>
        )}
      </View>



      <View style={{flex:1,position:'absolute', top:0, justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{width:"90%", height:'50%',backgroundColor:'#e0e0e0',borderWidth:1, borderColor:'#b0b0b0', alignSelf:'center',justifyContent:'space-around',alignItems:'center',marginTop:'50%', borderRadius:20, flexDirection:'row'}}>
         
        <TouchableOpacity onPress={()=>{
          setModalVisible(!modalVisible)
          setPoliciesVisible(false)
        }} style={{position:'absolute', top:10, right:10, backgroundColor:'red',zIndex:2, borderRadius:20, padding:10}}>
            <Icon color={'white'} name="close-sharp" size={30} />
          </TouchableOpacity> 
          {!policiesVisible&&<TouchableOpacity onPress={()=>setPoliciesVisible(true)}>
          <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', width:120, height:120, borderRadius:20}}>
            <Icon name="document-text-outline" size={50} />
          </View>
          </TouchableOpacity> }
          {!policiesVisible&&<TouchableOpacity onPress={handleQuit}>
          <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', width:120, height:120, borderRadius:20}}>
            <Icon name="exit-outline" size={50} />
          </View>
          </TouchableOpacity>}
          {policiesVisible&&(
            <View>
              <ScrollView style={{paddingHorizontal:4,}}>
              <Text style={{fontFamily:'monospace', backgroundColor:'white', borderRadius:20, padding:6, }}>Gizlilik Politikas?? {'\n\n'}

Son g??ncellenme: 04/02/2022 {'\n\n'}

G??venli??iniz bizim i??in ??nemli. Bu sebeple bizimle payla??aca????n??z ki??isel verileriz hassasiyetle korunmaktad??r. {'\n\n'}

Biz, Mithat Akbulut (Ba????ms??z Geli??tirici), veri sorumlusu olarak, bu gizlilik ve ki??isel verilerin korunmas?? politikas?? ile, hangi ki??isel verilerinizin hangi ama??la i??lenece??i, i??lenen verilerin kimlerle ve neden payla????labilece??i, veri i??leme y??ntemimiz ve hukuki sebeplerimiz ile; i??lenen verilerinize ili??kin haklar??n??z??n neler oldu??u hususunda sizleri ayd??nlatmay?? ama??l??yoruz.{'\n\n'}

Toplanan Ki??isel Verileriniz, Toplanma Y??ntemi ve Hukuki Sebebi{'\n\n'}

Kimlik, (isim, soy isim, do??um tarihi gibi) ileti??im, (adres, e-posta adresi, telefon, IP, konum gibi) ??zl??k, sosyal medya, finans bilgileriniz ile g??rsel ve i??itsel kay??tlar??n??z taraf??m??zca, ??erezler (cookies) vb. teknolojiler vas??tas??yla, otomatik veya otomatik olmayan y??ntemlerle ve bazen de analitik sa??lay??c??lar, reklam a??lar??, arama bilgi sa??lay??c??lar??, teknoloji sa??lay??c??lar?? gibi ??????nc?? taraflardan elde edilerek, kaydedilerek, depolanarak ve g??ncellenerek, aram??zdaki hizmet ve s??zle??me ili??kisi ??er??evesinde ve s??resince, me??ru menfaat i??leme ??art??na dayan??larak i??lenecektir.{'\n\n'}

Ki??isel Verilerinizin ????lenme Amac??{'\n\n'}

Bizimle payla??t??????n??z ki??isel verileriniz; hizmetlerimizden faydalanabilmeniz amac??yla sizlerle s??zle??meler kurabilmek, sundu??umuz hizmetlerin gerekliliklerini en iyi ??ekilde ve aram??zdaki s??zle??melere uygun olarak yerine getirebilmek, bu s??zle??melerden do??an haklar??n??z??n taraf??n??zca kullan??lmas??n?? sa??layabilmek, ??r??n ve hizmetlerimizi, ihtiya??lar??n??z do??rultusunda geli??tirebilmek ve bu geli??melerden sizleri haberdar edebilmek, ayr??ca sizleri daha geni?? kapsaml?? hizmet sa??lay??c??lar?? ile yasal ??er??eveler i??erisinde bulu??turabilmek ve kanundan do??an zorunluluklar??n (ki??isel verilerin talep halinde adli ve idari makamlarla payla????lmas??) yerine getirilebilmesi amac??yla, s??zle??me ve hizmet s??resince, amac??na uygun ve ??l????l?? bir ??ekilde i??lenecek ve g??ncellenecektir.{'\n\n'}

Toplanan Ki??isel Verilerin Kimlere ve Hangi Ama??larla Aktar??labilece??i{'\n\n'}

Bizimle payla??t??????n??z ki??isel verileriniz; faaliyetlerimizi y??r??tmek ??zere hizmet ald??????m??z ve/veya verdi??imiz, s??zle??mesel ili??ki i??erisinde bulundu??umuz, i?? birli??i yapt??????m??z, yurt i??i ve yurt d??????ndaki 3. ??ah??slar ile kurum ve kurulu??lara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari ??nlemler al??nmas?? ko??ulu ile aktar??labilecektir.{'\n\n'}

Ki??isel Verileri ????lenen Ki??i Olarak Haklar??n??z{'\n\n'}

KVKK madde 11 uyar??nca herkes, veri sorumlusuna ba??vurarak a??a????daki haklar??n?? kullanabilir:{'\n\n'}

Ki??isel veri i??lenip i??lenmedi??ini ????renme,{'\n\n'}
Ki??isel verileri i??lenmi??se buna ili??kin bilgi talep etme,{'\n\n'}
Ki??isel verilerin i??lenme amac??n?? ve bunlar??n amac??na uygun kullan??l??p kullan??lmad??????n?? ????renme,{'\n\n'}
Yurt i??inde veya yurt d??????nda ki??isel verilerin aktar??ld?????? ??????nc?? ki??ileri bilme,{'\n\n'}
Ki??isel verilerin eksik veya yanl???? i??lenmi?? olmas?? h??linde bunlar??n d??zeltilmesini isteme,{'\n\n'}
Ki??isel verilerin silinmesini veya yok edilmesini isteme,{'\n\n'}
(e) ve (f) bentleri uyar??nca yap??lan i??lemlerin, ki??isel verilerin aktar??ld?????? ??????nc?? ki??ilere bildirilmesini isteme,{'\n\n'}
????lenen verilerin m??nhas??ran otomatik sistemler vas??tas??yla analiz edilmesi suretiyle ki??inin kendisi aleyhine bir sonucun ortaya ????kmas??na itiraz etme,{'\n\n'}
Ki??isel verilerin kanuna ayk??r?? olarak i??lenmesi sebebiyle zarara u??ramas?? h??linde zarar??n giderilmesini talep etme, haklar??na sahiptir.{'\n\n'}
Yukar??da say??lan haklar??n??z?? kullanmak ??zere mithatakblt@icloud.com ??zerinden bizimle ileti??ime ge??ebilirsiniz.{'\n\n'}

??leti??im{'\n\n'}

Sizlere talepleriniz do??rultusunda hizmet sunabilmek amac??yla, sadece gerekli olan ki??isel verilerinizin, i??bu gizlilik ve ki??isel verilerin i??lenmesi politikas?? uyar??nca i??lenmesini, kabul edip etmemek hususunda tamamen ??zg??rs??n??z. Uygulamay?? kullanmaya devam etti??iniz takdirde, kabul etmi?? oldu??unuz taraf??m??zca varsay??lacakt??r. ??ayet kabul etmiyorsan??z, l??tfen uygulamay?? t??m cihazlar??n??zdan kald??r??n??z. Ayr??nt??l?? bilgi i??in bizimle mithatakblt@icloud.com e-mail adresi ??zerinden ileti??ime ge??mekten l??tfen ??ekinmeyiniz.</Text>
            </ScrollView></View>
          )}
          
        </View>
        </Modal>
      </View>
      </View>

    </View>
  );
}
