import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Modal, Pressable, ActivityIndicator } from 'react-native';
import { gStyle } from '../styles/style';
import Tehtavat from './Tehtavat';

export default function Rastikierros({ navigation }) {
  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/tapahtuma/R`);
      const json = await response.json();
      setTapahtuma(json);
      setLoading(true);
    } catch (error) {
      Alert.alert("ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtuma() }, []);

  return (
    <ScrollView style={{flex: 1}}>

      {loading ?

      <View>

        <View style={gStyle.description}>
          <Text style={gStyle.descriptionText}>{tapahtuma.tapahtumaKuvaus}</Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView>
          <View style={gStyle.centeredView}>
            <View style={gStyle.modalView}>
              <Pressable
                style={[gStyle.button, gStyle.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={gStyle.title}>Sulje</Text>
              </Pressable>
              <Text style={gStyle.title}>Rastikierroksen säännöt:</Text>
              <Text style={gStyle.modalText}>{tapahtuma.tapahtumaSaannot} </Text>
              <Pressable
                style={[gStyle.button, gStyle.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={gStyle.title}>Sulje</Text>
              </Pressable>
            </View>
          </View>
          </ScrollView>
        </Modal>
        <Pressable
          style={[gStyle.button]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={gStyle.buttonText}>Rastikierroksen säännöt</Text>
        </Pressable>
        <Pressable
          style={[gStyle.button]}
          onPress={() => {
            navigation.navigate('Tehtavalista');
          }}
        >
          <Text style={gStyle.buttonText}>Luo tehtävälista</Text>
        </Pressable>

        </View> : <View style={gStyle.loading}>
          <ActivityIndicator size="large" color='#FF6FB5'/>
        </View>

        }

    </ScrollView>
  );
}