import React, { PropsWithChildren } from 'react'
import { InputModeOptions, KeyboardTypeOptions, Text, TextInput } from 'react-native'
import { backgroundColor, fadedColor, logoSecondColor, textfieldBackgroundColor } from '../config'
type TextfieldProps = PropsWithChildren<{
    maxLength? : number;
    inputMode? : InputModeOptions;
    keyboardType? : KeyboardTypeOptions;

}>;
const Textfield= ({children,maxLength=1000,inputMode='text',keyboardType='default'} : PropsWithChildren<TextfieldProps>) => {
    
    const styles = {
        textfield: {
            flex:1,
            backgroundColor: textfieldBackgroundColor,
            color: "white",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 10,
            fontFamily: 'DMSans-Regular',
            fontSize:15,
        },
    }

    return (
    <TextInput
        placeholder='9876543210'
        placeholderTextColor={fadedColor}
        maxLength={maxLength}
        inputMode={inputMode}
        keyboardType={keyboardType}
        style={styles.textfield}
    />
    )
}

export default Textfield