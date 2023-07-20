import React,{PropsWithChildren} from 'react'
import { TouchableOpacity, Text,StyleSheet } from 'react-native'
import { buttonColor } from '../config';
type ButtonProps = PropsWithChildren<{
    text? : string;
}>;
const styles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        padding:16,
        width:'100%',
        backgroundColor: buttonColor,
        borderRadius:10,
        marginTop:'auto'
    },
    textStyle2:{
        fontFamily:'DMSans-Medium',
        color: 'white',
        fontSize: 18,
        fontWeight:'700'
    }
});
const Button = ({children,text} : PropsWithChildren<ButtonProps>)=> {
  return (
    <TouchableOpacity style={styles.button}>
                <Text style={styles.textStyle2}>{text}</Text>
            </TouchableOpacity>
  )
}

export default Button