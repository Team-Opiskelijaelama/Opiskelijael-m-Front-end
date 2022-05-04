import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Pressable, Dimensions } from 'react-native';
import { gStyle } from '../styles/style';
import RestaurantApi from './RestaurantApi'


export default function Appro({ navigation }) {

  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelamaversio1.herokuapp.com/rest/tapahtuma/A`);
      const json = await response.json();
      setTapahtuma(json);
    } catch (error) {
      Alert.alert("ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtuma() }, []);

  return (
    <ScrollView>
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

              <Text style={gStyle.title}>Approjen säännöt:</Text>
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
          <Text style={gStyle.buttonText}>Approjen säännöt</Text>
        </Pressable>
        
        <Pressable
          style={[gStyle.button]}
          onPress={() => {
            navigation.navigate('Ravintolat');
          }}
        >
          <Text style={gStyle.buttonText}>Ravintolat</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}
