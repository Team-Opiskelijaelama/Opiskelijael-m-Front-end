import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View, Button, FlatList, Image, Pressable, Modal} from "react-native";
import * as Location from 'expo-location'; 
import MapView, { Marker } from 'react-native-maps';
import Checkbox from 'expo-checkbox';
import { gStyle } from '../styles/style';
import {API_KEY} from "@env";
import { setStatusBarStyle } from "expo-status-bar";

export default function RestaurantApi() {

  const [ravintolat, setRavintolat] = useState([]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [modalVisible, setModalVisible] = useState(false);



  const handleChange = (id) => {
    let temp = ravintolat.map((ravintola) => {
      if (id === ravintola.indeksi) {
        return { ...ravintola, isChecked: !ravintola.isChecked };
      }
      return ravintola;
    });
    setRavintolat(temp);
  };


  const initial = {
    latitude: 61.92411,
    longitude: 25.748151,
    latitudeDelta: 0.200,
    longitudeDelta: 0.100
  };

  const [region, setRegion] = useState(initial);

  const getSijainti = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
      setLat((location.coords.latitude).toString());
      setLon((location.coords.longitude).toString());
      const { latitude, longitude } = location.coords;
      setRegion({ ...region, latitude: latitude, longitude: longitude });
      getRepositories;
    }

 
  const getRepositories = async () => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=baari&location=' + lat + '%2C' + lon + '&radius=2000&key=' + API_KEY;

    try {
      const response = await fetch(url);
      const data = await response.json();


    for (let i = 0; i < 6; i++) {
      setRavintolat((ravintolat) => [...ravintolat, { name: data.results[i].name, lat: data.results[i].geometry.location.lat , lon: data.results[i].geometry.location.lng, open: data.results[i].opening_hours.open_now, address: data.results[i].vicinity, isChecked: false, indeksi: i }] 
      )
    }
  
    console.log(ravintolat);



    } catch (error) {
      console.error('fail', error.message);
    }
    
  }
  
    return (
      <View style={gStyle.container}>
      <MapView
        style={gStyle.map}
        region={region}
      >
        <Marker
          coordinate={{latitude: Number(lat), longitude: Number(lon)}}
          title='Oma Sijaintisi'
        />
        {ravintolat.map((item, index) => (
          <Marker key={index} title={item.name} coordinate={{latitude: Number(item.lat), longitude: Number(item.lon)}}/>
        ))}
      </MapView>
      <Pressable
        style={[gStyle.button, gStyle.buttonOpen]}
        onPress={getSijainti}
      >
        <Text style={gStyle.title}>Näytä sijaintisi</Text>
      </Pressable>
      <Pressable
        style={[gStyle.button, gStyle.buttonOpen]}
        onPress={getRepositories}
      >
        <Text style={gStyle.title}>Hanki ravintoloita</Text>
      </Pressable>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >

          <View style={gStyle.centeredView}>
            <View style={gStyle.modalView}>

              <FlatList
                data={ravintolat}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle = {{
                  padding: 10,
                }}
                renderItem={({ item }) => (
                
                  <View style={{flexDirection: 'row', padding: 10, marginVertical: 10, backgroundColor: '#ededed', borderRadius: 16, shadowColor: '#000'}}>
                  
                  <Checkbox
                    value={item.isChecked}
                    onValueChange={() => {
                      handleChange(item.indeksi);
                    }}
                    style={gStyle.checkbox}
                  />         
                  
                  <View>
         
                  <Text style={{fontSize: 18}}>{item.name}</Text>

                  <Text style={{fontSize: 14}}>{item.address}</Text>
                  

                  </View>

                </View>
              )}/>
              <Pressable
                style={[gStyle.button, gStyle.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={gStyle.title}>Sulje</Text>
              </Pressable>
            </View>
          </View>

        </Modal>
        <Pressable
          style={[gStyle.button, gStyle.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={gStyle.title}>Ravintolat</Text>
        </Pressable>

    
    </View>
  );
 
}
