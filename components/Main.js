import React from 'react';
import { Text, View, Button} from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

  const loadAppro = () => {
    navigation.navigate('Appro');
  }
  const loadSitsit = () => {
    navigation.navigate('Sitsit');
  }
  const loadGambinakokous = () => {
    navigation.navigate('Gambinakokous');
  }
  const loadRastikierros= () => {
    navigation.navigate('Rastikierros');
  }

  return (
    <View style={gStyle.main}>

      <Text style={gStyle.title}>Etusivu</Text>

      <Button title='Appro' onPress={loadAppro}/>

      <Button title='Sitsit' onPress={loadSitsit}/>

      <Button title='Gambinakokous' onPress={loadGambinakokous}/>

      <Button title='Rastikierros' onPress={loadRastikierros}/>

    </View>
  );
}