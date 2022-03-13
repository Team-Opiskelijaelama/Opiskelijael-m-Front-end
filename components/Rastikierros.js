import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Modal, Pressable } from 'react-native';
import { gStyle } from '../styles/style';

export default function Rastikierros() {
  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
    <ScrollView>
      <View style={gStyle.main}>
        <Text style={gStyle.title}> {tapahtuma.tapahtumaKuvaus}</Text>
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
          style={[gStyle.button, gStyle.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={gStyle.title}>Rastikierroksen säännöt</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
