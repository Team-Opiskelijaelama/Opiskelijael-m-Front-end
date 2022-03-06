import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, Alert, Pressable, ScrollView } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

  const [tapahtumat, setTapahtumat] = useState([]);

  const haeTapahtumat = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelamaversio1.herokuapp.com/rest/tapahtumat`);
      const json = await response.json();
      setTapahtumat(json);
    } catch (error) {
      Alert.alert("voihan", "paska, haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtumat() }, []);


  return (
    <ScrollView>
    <View style={gStyle.main}>

      <FlatList data={tapahtumat} renderItem={({ item }) =>
        <View>
          <Button title={item.tapahtumaNimi} onPress={() => {
            navigation.navigate(item.tapahtumaNimi);
          }} />
          <Text>{item.tapahtumaKuvaus}</Text>
        </View>}
        keyExtractor={(item, index) => index}
      />

    </View>
    </ScrollView>
  );
}