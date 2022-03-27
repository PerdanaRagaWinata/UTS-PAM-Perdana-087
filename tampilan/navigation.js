import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/home'
import blabla from './screens/buat-tiket'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Booking" component={blabla}/>
        <Tab.Screen name="Pembatalan" component={HomeScreen}/>
        <Tab.Screen name="lainnya" component={blabla}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box :{
    marginTop :70,
    width : 300,
    backgroundColor :'white',
    alignItems : 'center',
    paddingVertical :10,
    paddingHorizontal :18,
    borderRadius : 5,
    shadowRadius :10,
    
  },
  Text :{
    color : "#00579c",
    fontWeight : 'bold',
    fontSize : 30,
    marginBottom :40,
  },
  iconbox :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  menu:{
    alignSelf :'flex-start',
  },
  textInput:{
    justifyContent: 'center',
    marginLeft :20,
    backgroundColor :"#f0f0f0",
    borderRadius : 5,
    width :260,
    fontWeight:"bold",
    paddingLeft :15,
  },
  dewasa :{
    justifyContent:"center",
    marginTop :20,
    backgroundColor :"#f0f0f0",
    shadowRadius : 5,
    width :230,
  },
  Touchable:{
    backgroundColor :"orange",
    width : 150,
    marginTop : 20,
    flexDirection : "row",
    height : 40,
    borderRadius : 5,
    alignItems :"center"
  },
  TextTombol :{
    marginLeft :10,
    color : 'white',
    fontWeight : 'bold'
  },
  Tombol:{
    marginLeft : 10,
  }
});