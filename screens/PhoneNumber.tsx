import React from 'react'
import { View, SafeAreaView,  TouchableWithoutFeedback, Keyboard,Image,useWindowDimensions, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import Button from '../components/button';
import Textfield from '../components/textfield';
import { backgroundColor, fadedColor, logoFirstColor, textfieldBackgroundColor } from '../config';
const styles = StyleSheet.create({
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
    countryCodeContainer:{
        backgroundColor: textfieldBackgroundColor,
        borderRadius:10,
        padding:16,
        marginRight:8
    },
    buttonContainer:{
        display:'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    
  });
  
const PhoneNumber:React.FC = () => {
    const {height} = useWindowDimensions();
    const logoStyle = { height: height* 0.1, marginBottom:12 };
    const upperSpace = {marginTop: height* 0.1 };
    const space = {marginTop: height* 0.05 };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
      <View style={[styles.upperContainer, upperSpace]}>
        <Image 
          source={require('../images/logo.png')}
          style={logoStyle}
          resizeMode="contain"
        />
        <Text style={styles.logoText1}>Cell
            <Text style={styles.logoText2}>Doc</Text>
        </Text>
        <View style={[styles.entryContainer,space]}>
            <Text style={styles.textStyle}>Mobile No</Text>

            <View style={styles.textfiledContainer}>
                <View style={styles.countryCodeContainer}>
                    <Text style={styles.textStyle}>+91</Text>
                </View>
                <Textfield maxLength={10} keyboardType='numeric' inputMode='numeric'/>  
            </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
            <Button text='Continue'/>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default PhoneNumber