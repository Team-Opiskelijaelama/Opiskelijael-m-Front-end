import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert, Pressable, ScrollView, ImageBackground, ActivityIndicator} from 'react-native';
import { gStyle } from '../styles/style';
import Juomapeli from './Juomapeli';

export default function Main({ navigation }) {

  const [tapahtumat, setTapahtumat] = useState([]);
  const [loading, setLoading] = useState(false);

  const haeTapahtumat = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/tapahtumat`);
      const json = await response.json();
      setTapahtumat(json);
      setLoading(true);
    } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtumat() }, []);


  return (
    
    <View>

      {loading ? 

      <ImageBackground 
        source={require('../assets/AaltoAlumni_HUB_UUSI_haalarikuva_1380x600.jpg')}
        style={styles.image}
      >

      <Text style={styles.title}>
        Opiskelija
        elämä
      </Text>

      <View style={styles.row}>

      <Pressable style={styles.button} onPress={() => navigation.navigate(tapahtumat[0].tapahtumaNimi)}>
              <Text style={styles.buttonText}>{tapahtumat[0].tapahtumaNimi}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate(tapahtumat[1].tapahtumaNimi)}>
              <Text style={styles.buttonText}>{tapahtumat[1].tapahtumaNimi}</Text>
      </Pressable>

      </View>

      <View style={styles.row}>

      <Pressable style={styles.button} onPress={() => navigation.navigate(tapahtumat[2].tapahtumaNimi)}>
              <Text style={styles.buttonText}>{tapahtumat[2].tapahtumaNimi}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate(tapahtumat[3].tapahtumaNimi)}>
              <Text style={styles.buttonText}>{tapahtumat[3].tapahtumaNimi}</Text>
      </Pressable>

      </View>

      {/* <FlatList data={tapahtumat} renderItem={({ item }) =>
        <View>
          <Pressable style={styles.button} onPress={() => navigation.navigate(item.tapahtumaNimi)}>
              <Text style={styles.buttonText}>{item.tapahtumaNimi}</Text>
          </Pressable>
          <Text>{item.tapahtumaKuvaus}</Text>
        </View>}
        keyExtractor={(item, index) => index}
      /> */}
      {/* <Button title={'Juomapelit'} onPress={() => {
        navigation.navigate('Juomapeli');
      }} />  */}

      <Pressable style={styles.buttonLast} onPress={() => navigation.navigate('Juomapeli')}>
        <Text style={styles.buttonText}>Juomapelit</Text>
      </Pressable>

      </ImageBackground> : <ActivityIndicator size="large" color='#FF6FB5' />

    }

      
    </View>
 
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    width: '100%', 
    height: '80%', 
    resizeMode: 'cover',
    justifyContent: 'center',
 }, 
 title: {
    marginTop: 310,
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor:'#353839',
    textShadowOffset:{width: 10, height: 5},
    textShadowRadius: 40,
    width: '77%',
    marginLeft: 25, 
 },
   button: {
    backgroundColor: '#FF6FB5',
    width: 160,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center' 
 },
  buttonLast: {
    backgroundColor: '#FF6FB5',
    width: 345,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center' 
 },
 buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

 },

});
