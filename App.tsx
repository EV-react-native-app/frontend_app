import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import Textfield from './components/textfield';
import { backgroundColor } from './config';
import PhoneNumber from './screens/PhoneNumber';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title,}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          // styles.sectionTitle,
          // {
          //   color: isDarkMode ? Colors.white : Colors.black,
          // },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          // styles.sectionDescription,
          // {
          //   color: isDarkMode ? Colors.light : Colors.dark,
          // },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const {height} = useWindowDimensions();
  const logoStyle = { height: height* 0.1 };
  const upperSpace = {marginTop: height* 0.1 };
  return (
    <PhoneNumber/>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex: 1,
    backgroundColor :"white"
  },
  upperContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
