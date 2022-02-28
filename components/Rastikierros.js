import React, { useState, useEffect } from 'react';
import { Text, View, } from 'react-native';
import { gStyle } from '../styles/style';

export default function Rastikierros() {
  const [tapahtuma, setTapahtuma] = useState({});

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelamaversio1.herokuapp.com/rest/tapahtuma/R`);
      const json = await response.json();
      setTapahtuma(json);
    } catch (error) {
      Alert.alert("voihan", "paska, haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtuma() }, []);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}> {tapahtuma.tapahtumaKuvaus}</Text>
      <Text style={gStyle.title}> {tapahtuma.tapahtumaSaannot}</Text>
    </View>
  );
}
