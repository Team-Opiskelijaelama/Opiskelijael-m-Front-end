import React from "react";
import Main from './components/Main';
import Appro from './components/Appro';
import Sitsit from './components/Sitsit';
import Gambinakokous from "./components/Gambinakokous";
import Tehtavakierros from './components/Tehtavakierros';
import Juomapeli from './components/Juomapeli';
import Sitsilaulut from "./components/Sitsilaulut";
import Poytakirja from "./components/Poytakirja";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantApi from "./components/RestaurantApi";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{
                    headerShown: false
                }}
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
                name='Tasks'
                component={Tehtavakierros}
                options={{title: 'Tehtäväkierros'}}
                />
            <Stack.Screen 
                name='Games'
                component={Juomapeli}
                options={{title: 'Juomapelit'}}
                />
            <Stack.Screen
                name='Bars'
                component={RestaurantApi}
                options={{title: 'Ravintolat'}}
            />
            <Stack.Screen
                name='Songs'
                component={Sitsilaulut}
                options={{title: 'Sitsilaulut'}}
            />
            <Stack.Screen
                name='Transcript'
                component={Poytakirja}
                options={{title: 'Pöytäkirja'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}