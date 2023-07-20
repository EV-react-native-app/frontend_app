import React,{useState} from 'react'
import { View, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Image,useWindowDimensions, StyleSheet, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import Button from '../components/button';
import Textfield from '../components/textfield';
import { backgroundColor, fadedColor, logoFirstColor, textfieldBackgroundColor } from '../config';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    Keyboard:{
        flex:1
    },
    container:{
      display:'flex',
      flex: 1,
      backgroundColor : backgroundColor,
      paddingHorizontal:16,
      paddingVertical:20
    },
    upperContainer:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    logoText1 : {
        fontFamily:'DMSans-Regular',
        color: logoFirstColor,
        fontWeight: '900',
        fontSize: 24
    },
    logoText2 : {
        fontFamily:'DMSans-Regular',
        color: 'white',
        fontSize: 24
    },
    entryContainer : {
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        width:'100%',
    },
    textStyle:{
        fontFamily:'DMSans-Medium',
        color: fadedColor,
        fontSize: 15,
        fontWeight:'600'
    },
    textfiledContainer :{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        width:'100%',
        marginTop:12,
    },
    
    buttonContainer:{
        display:'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    
  });
type Param = {
    phoneNumber? : string;
}
const PersonalDetails:React.FC = () => {
    const {height} = useWindowDimensions();
    const logoStyle = { height: height* 0.1, marginBottom:12 };
    const upperSpace = {marginTop: height* 0.1 };
    const route = useRoute();
    const data: Param = route.params as Param;
    const space = {marginTop: height* 0.05 };
    const [intialStyle, setInitalStyle] = useState([styles.upperContainer,upperSpace]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const keyboardShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setInitalStyle([styles.upperContainer]);
        }
    );
    const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setInitalStyle([styles.upperContainer,upperSpace]);
        }
    );
  
  return (
  
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
      
      <View style={intialStyle}>
        <Image 
          source={require('../images/logo.png')}
          style={logoStyle}
          resizeMode="contain"
        />
        <Text style={styles.logoText1}>Cell
            <Text style={styles.logoText2}>Doc</Text>
        </Text>
        <View style={[styles.entryContainer,space]}>
            <Text style={styles.textStyle}>Name</Text>

            <View style={styles.textfiledContainer}>
                
                <Textfield placeholder='name' keyboardType='default' inputMode='text' onChange={(item)=> setName(item)}/>  
            </View>
            <Text style={[styles.textStyle,{ marginTop:16 }]}>Email (optional)</Text>

            <View style={styles.textfiledContainer}>
                
                <Textfield placeholder='email' keyboardType='email-address' inputMode='email' onChange={(item)=> setEmail(item)}/>
            </View>
        </View>
        
      </View>
      
    
      <View style={styles.buttonContainer}>
            <Button text='Continue' onPress={()=>{
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if(name!=''){
                    if(emailRegex.test(email)||email==''){
                        console.log(name);
                        console.log(data.phoneNumber);
                        console.log(email);
                    }
                }
            }}/>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PersonalDetails