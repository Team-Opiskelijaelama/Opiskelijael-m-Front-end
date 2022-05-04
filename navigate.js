import React from "react";
import Main from './components/Main';
import Appro from './components/Appro';
import Sitsit from './components/Sitsit';
import Gambinakokous from "./components/Gambinakokous";
import Rastikierros from './components/Rastikierros';
import Juomapeli from './components/Juomapeli';
import Tehtavat from './components/Tehtavat';
import Sitsilaulut from "./components/Sitsilaulut";


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
                name='Rastikierros'
                component={Rastikierros}
                options={{title: 'Rastikierros'}}
                />
            <Stack.Screen 
                name='Juomapeli'
                component={Juomapeli}
                options={{title: 'Juomapelit'}}
                />
            <Stack.Screen
                name='Tehtavalista'
                component={Tehtavat}
                options={{title: 'Tehtävälista'}}
            />
            <Stack.Screen
                name='Ravintolat'
                component={RestaurantApi}
                options={{title: 'Ravintolat'}}
            />
            <Stack.Screen
                name='Sitsilaulut'
                component={Sitsilaulut}
                options={{title: 'Sitsilaulut'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}