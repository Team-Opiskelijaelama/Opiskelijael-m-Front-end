import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, Modal, Pressable, ActivityIndicator } from 'react-native';
import { gStyle } from '../styles/style';
import Sitsilaulut from './Sitsilaulut'

export default function Sitsit({ navigation }) {
  const [tapahtuma, setTapahtuma] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const haeTapahtuma = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelamaversio1.herokuapp.com/rest/tapahtuma/S`);
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
              <Text style={gStyle.title}>Sitsien säännöt:</Text>
              <Text style={gStyle.modalText}>{tapahtuma.tapahtumaSaannot} </Text>
              <Text style={gStyle.title}>Käytös:</Text>
              <Text style={gStyle.modalText}>{tapahtuma.kaytos} </Text>
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
          <Text style={gStyle.buttonText}>Sitsien säännöt</Text>
        </Pressable>

        {/* <Sitsilaulut/> */}

        <Pressable
          style={[gStyle.button]}
          onPress={() => {
            navigation.navigate('Sitsilaulut');
          }}
        >
          <Text style={gStyle.buttonText}>Luo laulukirja</Text>
        </Pressable>

        </View> : <View style={gStyle.loading}>
          <ActivityIndicator size="large" color='#FF6FB5'/>
        </View>

        }

    </ScrollView>
  );
}
