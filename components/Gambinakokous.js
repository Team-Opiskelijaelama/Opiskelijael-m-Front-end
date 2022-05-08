import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Pressable, Dimensions, ActivityIndicator } from 'react-native';
import { gStyle } from '../styles/style';

export default function Gambinakokous({ navigation }) {
  const [event, setEvent] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEvent = async () => {
    try {
      const response = await
        fetch(`https://opiskelijaelama.herokuapp.com/rest/tapahtuma/G`);
      const json = await response.json();
      setEvent(json);
      setLoading(true);
    } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { fetchEvent() }, []);

  return (
    <ScrollView>

        {loading ?

        <View>

        <View style={gStyle.description}>
          <Text style={gStyle.descriptionText}>{event.tapahtumaKuvaus}</Text>
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
              <Text style={gStyle.modalText}>{event.tapahtumaSaannot} </Text>
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
        <Pressable
          style={[gStyle.button]}
          onPress={() => {
            navigation.navigate('Transcript');
          }}
        >
          <Text style={gStyle.buttonText}>Pöytäkirjapohja</Text>
        </Pressable>
      </View> : <View style={gStyle.loading}>
        <ActivityIndicator size="large" color='#FF6FB5'/>
      </View>
      }
    </ScrollView>
  );
}

