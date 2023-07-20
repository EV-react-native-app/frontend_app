import React from 'react'
import { View, SafeAreaView,  TouchableWithoutFeedback, Keyboard,Image,useWindowDimensions, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import Button from '../components/button';
import { backgroundColor, buttonColor, fadedColor, logoFirstColor, textfieldBackgroundColor } from '../config';
import OtpInputs from 'react-native-otp-inputs';

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
        marginTop:12,
        width:300,
        height:54
    },
    otpContainer :{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: fadedColor,
        borderRadius:10,
        width:60,
        gap:10,
    },
    textStyle2:{
        fontFamily:'DMSans-Medium',
        color: buttonColor,
        fontSize: 14,
        fontWeight:'700'
    },
    otpText:{
        fontFamily: 'DMSans-Regular',
        fontSize:15,
        fontWeight:'700',
        color:'white',
    },
    buttonContainer:{
        display:'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    
  });
  
const Otp:React.FC = () => {
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
                <Text style={styles.textStyle}>OTP send to +91 9876543217</Text>

                <View style={styles.textfiledContainer}>
                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={4} autofillFromClipboard={false}
                    inputContainerStyles={styles.otpContainer} 
                    inputStyles={styles.otpText} 
                    keyboardType='phone-pad'
                    inputMode='numeric'
                />
                

            </View>
        </View>
        <Text style={[styles.textStyle2, space]}>Resend OTP</Text>
      </View>
      <View style={styles.buttonContainer}>
            <Button text='Verify'/>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Otp