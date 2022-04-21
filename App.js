import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';

import HomeScreen from "./Component/HomeScreen/HomeScreen";
import Screen_detail from "./Component/Screen_detail/Detail_contact";
import Screen_tambah from "./Component/Screen_tambah/Tambah_contact";

const Stack = createNativeStackNavigator();

function App(){
    return(
     <NavigationContainer>
        <Stack.Navigator initialRouterName="Home">
          <Stack.Screen
            name="Home RaContact"
            component={HomeScreen} 
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Detail kontak"
            component={Screen_detail} 
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Tambahkan kontak"
            component={Screen_tambah} 
            options={{ headerShown: false }}
        />
       
        </Stack.Navigator>

    </NavigationContainer>












    )


    






















}

export default App;








