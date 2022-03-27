import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react'

import TampilanHome from './tampilan/home';
import TampilanPemesanan from './tampilan/pemesanan';
import TampilanPembatalan from './tampilan/pembatalan';
import TampilanLainnya from './tampilan/lainnya';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={TampilanHome}
          options={{
            headerShown: false,
            tabBarLabel :'Beranda',
            tabBarIcon:()=>(
            <Icon name={'home'}  size={28}/>
              )
            }}/>
          <Tab.Screen name="Booking" component={TampilanPemesanan}
          options={{
            headerShown: false,
            tabBarLabel :'Booking Kapal',
            tabBarIcon:()=>(
            <Icon name={'boat'}  size={28}/>
              )
            }}/>
          <Tab.Screen name="Pembatalan" component={TampilanPembatalan}
          options={{
            headerShown: false,
            tabBarLabel :'Pembatalan',
            tabBarIcon:()=>(
            <Icon name={'close-circle-outline'}  size={28}/>
              )
            }}/>
          <Tab.Screen name="Lainnya" component={TampilanLainnya}
          options={{
            headerShown: false,
            tabBarLabel :'Lainnya',
            tabBarIcon:()=>(
            <Icon name={'options'}  size={28}/>
              )
            }}/>
        </Tab.Navigator>

        

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;