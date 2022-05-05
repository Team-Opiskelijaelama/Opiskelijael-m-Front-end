import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Pressable, Dimensions, ActivityIndicator } from 'react-native';
import { gStyle } from '../styles/style';

export default function Gambinakokous() {
  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/tapahtuma/G`);
      const json = await response.json();
      setTapahtuma(json);
      setLoading(true);
    } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { haeTapahtuma() }, []);

  return (
    <ScrollView>

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
              <Text style={gStyle.title}>Gambinakokouksen säännöt:</Text>
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
          <Text style={gStyle.buttonText}>Gambinakokouksen säännöt</Text>
        </Pressable>
      </View> : <View style={gStyle.loading}>
        <ActivityIndicator size="large" color='#FF6FB5'/>
      </View>
      }
    </ScrollView>
  );
}

