import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, Modal, Pressable } from 'react-native';
import { gStyle } from '../styles/style';
import Sitsilaulut from './Sitsilaulut'

export default function Sitsit() {
  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelamaversio1.herokuapp.com/rest/tapahtuma/S`);
      const json = await response.json();
      setTapahtuma(json);
    } catch (error) {
      Alert.alert("voihan", "paska, haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtuma() }, []);

  return (
    <ScrollView>
      <View>

        <View style={gStyle.descriptionHuge}>
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
              <Text style={gStyle.title}>Sitsien säännöt:</Text>
              <Text style={gStyle.modalText}>{tapahtuma.tapahtumaSaannot} </Text>
              <Text style={gStyle.title}>Käytös:</Text>
              <Text style={gStyle.modalText}>{tapahtuma.kaytos} </Text>
              <Pressable
                style={[gStyle.button]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={gStyle.buttonText}>Sulje</Text>
              </Pressable>
            </View>
          </View>
          </ScrollView>
        </Modal>
        <Pressable
          style={[gStyle.button]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={gStyle.buttonText}>Sitsien säännöt</Text>
        </Pressable>
        <Sitsilaulut/>
     </View>
    </ScrollView>
  );
}
