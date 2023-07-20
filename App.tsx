import React from 'react';
import PhoneNumber from './screens/PhoneNumber';
import Otp from './screens/Otp';
import PersonalDetails from './screens/PersonalDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PhoneNumber' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


export default App;
