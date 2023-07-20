import React, { PropsWithChildren } from 'react'
import { InputModeOptions, KeyboardTypeOptions, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData } from 'react-native'
import { backgroundColor, fadedColor, logoSecondColor, textfieldBackgroundColor } from '../config'
type TextfieldProps = PropsWithChildren<{
    maxLength? : number;
    inputMode? : InputModeOptions;
    keyboardType? : KeyboardTypeOptions;
    placeholder?: string;
    onChange? :((text: string) => void) | undefined
}>;
const Textfield= ({children,maxLength=1000,inputMode='text',keyboardType='default',placeholder, onChange} : PropsWithChildren<TextfieldProps>) => {
    
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
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={fadedColor}
        maxLength={maxLength}
        inputMode={inputMode}
        keyboardType={keyboardType}
        style={styles.textfield}
    />
    )
}

export default Textfield