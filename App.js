import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './Screens/Login';
import ExchengeItem from './Screens/Exchenge';
import HomeScreen from './Screens/HomeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default function App() {
  return (
    <AppContainer/>

  );
}
const BottomTab = createBottomTabNavigator({
 
  home:{ screen :HomeScreen}, change:{screen :ExchengeItem},
 
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routname = navigation.state.routeName;
       if(routname === 'change'){
         return    <Image source={require('./assets/chan.jpg')} style={{width:50,height:50}}/>
       }
       if(routname === 'home'){
        return    <Image source={require('./assets/home.jpg')} style={{width:50,height:50}}/>
      }
    }
  })
})
const SwitchNavigatior = createSwitchNavigator({
  login:Login,
  tabs:BottomTab
})
const AppContainer = createAppContainer(SwitchNavigatior);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
