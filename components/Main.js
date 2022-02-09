import React from 'react';
import { Text, View, } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main() {
  return (
    <View style={gStyle.main}>

      <Text style={gStyle.title}>Etusivu</Text>

    </View>
  );
}