import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Component} from 'react';
import {View, Button} from 'react-native';
import Translator from './Translator';
import VK from './VK';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 3, alignItems: 'stretch', justifyContent: 'center' }}>
      <Button
        title="Go to VK"
        onPress={() => navigation.navigate('VK')}
      />
	   <Translator />
	   
    </View>
  );
}

function VKScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <VK />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VK" component={VKScreen} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
   render() {
       return (
      <NavigationContainer> 
		   <MyStack />
		   
	  </NavigationContainer>
	   
       );
   }
}