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
            Geliştirmek istediğin alanı seç ve çalışmaya başla.
          </Text>
        ) : seed===-1&&land.plant.level===0?<Text style={{ fontSize: 24, paddingHorizontal: 20, textAlign:'center' }}>Büyütmek istediğin ağaç türünü seç</Text>:(
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
              <Text style={{fontFamily:'monospace', backgroundColor:'white', borderRadius:20, padding:6, }}>Gizlilik Politikası {'\n\n'}

Son güncellenme: 04/02/2022 {'\n\n'}

Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız kişisel verileriz hassasiyetle korunmaktadır. {'\n\n'}

Biz, Mithat Akbulut (Bağımsız Geliştirici), veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile, hangi kişisel verilerinizin hangi amaçla işleneceği, işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.{'\n\n'}

Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi{'\n\n'}

Kimlik, (isim, soy isim, doğum tarihi gibi) iletişim, (adres, e-posta adresi, telefon, IP, konum gibi) özlük, sosyal medya, finans bilgileriniz ile görsel ve işitsel kayıtlarınız tarafımızca, çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.{'\n\n'}

Kişisel Verilerinizin İşlenme Amacı{'\n\n'}

Bizimle paylaştığınız kişisel verileriniz; hizmetlerimizden faydalanabilmeniz amacıyla sizlerle sözleşmeler kurabilmek, sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde ve aramızdaki sözleşmelere uygun olarak yerine getirebilmek, bu sözleşmelerden doğan haklarınızın tarafınızca kullanılmasını sağlayabilmek, ürün ve hizmetlerimizi, ihtiyaçlarınız doğrultusunda geliştirebilmek ve bu gelişmelerden sizleri haberdar edebilmek, ayrıca sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü bir şekilde işlenecek ve güncellenecektir.{'\n\n'}

Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği{'\n\n'}

Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki içerisinde bulunduğumuz, iş birliği yaptığımız, yurt içi ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu ile aktarılabilecektir.{'\n\n'}

Kişisel Verileri İşlenen Kişi Olarak Haklarınız{'\n\n'}

KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:{'\n\n'}

Kişisel veri işlenip işlenmediğini öğrenme,{'\n\n'}
Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,{'\n\n'}
Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,{'\n\n'}
Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,{'\n\n'}
Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,{'\n\n'}
Kişisel verilerin silinmesini veya yok edilmesini isteme,{'\n\n'}
(e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,{'\n\n'}
İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,{'\n\n'}
Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.{'\n\n'}
Yukarıda sayılan haklarınızı kullanmak üzere mithatakblt@icloud.com üzerinden bizimle iletişime geçebilirsiniz.{'\n\n'}

İletişim{'\n\n'}

Sizlere talepleriniz doğrultusunda hizmet sunabilmek amacıyla, sadece gerekli olan kişisel verilerinizin, işbu gizlilik ve kişisel verilerin işlenmesi politikası uyarınca işlenmesini, kabul edip etmemek hususunda tamamen özgürsünüz. Uygulamayı kullanmaya devam ettiğiniz takdirde, kabul etmiş olduğunuz tarafımızca varsayılacaktır. Şayet kabul etmiyorsanız, lütfen uygulamayı tüm cihazlarınızdan kaldırınız. Ayrıntılı bilgi için bizimle mithatakblt@icloud.com e-mail adresi üzerinden iletişime geçmekten lütfen çekinmeyiniz.</Text>
            </ScrollView></View>
          )}
          
        </View>
        </Modal>
      </View>
      </View>

    </View>
  );
}
