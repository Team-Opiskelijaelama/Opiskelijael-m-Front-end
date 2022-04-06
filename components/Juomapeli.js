import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, Modal, Pressable } from 'react-native';
import { gStyle } from '../styles/style';

export default function Juomapeli() {

  const [juomapeli, setJuomapeli] = useState({});

  const haeJuomapelit = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/juomapelit`);
      const json = await response.json();
      setJuomapeli(json);
    } catch (error) {
      Alert.alert("voihan", "paska, haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeJuomapelit() }, []);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}> Juomapelit</Text>
      <FlatList data={juomapeli} renderItem={({ item }) =>
        <View>
          <Text>Nimi: {item.juomapeliNimi}</Text>
          <Text>Tarvikkeet: {item.tarvikkeet}</Text>
          <Text>Säännöt: {item.juomapeliSaannot}</Text>
        </View>}
        keyExtractor={(item, index) => index}
      />

    </View>

  );
}
