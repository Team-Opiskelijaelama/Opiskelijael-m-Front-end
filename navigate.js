import React from "react";
import Main from './components/Main';
import Appro from './components/Appro';
import Sitsit from './components/Sitsit';
import Gambinakokous from "./components/Gambinakokous";
import Rastikierros from './components/Rastikierros';


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Opiskelijaelämää'}}
                />
            <Stack.Screen 
                name='Appro'
                component={Appro}
                options={{title: 'Appro'}}
                />
            <Stack.Screen 
                name='Sitsit'
                component={Sitsit}
                options={{title: 'Sitsit'}}
                />
            <Stack.Screen 
                name='Gambinakokous'
                component={Gambinakokous}
                options={{title: 'Gambinakokous'}}
                />
            <Stack.Screen 
                name='Rastikierros'
                component={Rastikierros}
                options={{title: 'Rastikierros'}}
                />
        </Stack.Navigator>
    </NavigationContainer>;
}