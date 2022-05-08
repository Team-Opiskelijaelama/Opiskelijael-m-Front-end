import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Juomapeli() {

  const [game, setGame] = useState({});

  const fetchGames = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/juomapelit`);
      const json = await response.json();
      setGame(json);
    } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { fetchGames() }, []);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}> Juomapelit</Text>
      <FlatList data={game} renderItem={({ item }) =>
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
