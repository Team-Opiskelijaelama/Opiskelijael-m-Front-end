import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, FlatList, Image, Pressable } from "react-native";
import * as Location from 'expo-location'; 
import { gStyle } from '../styles/style';

export default function RestaurantApi() {

  const [ravintolat, setRavintolat] = useState([]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  useEffect(() => {
    (async () => {
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

    })();
  }, []);


  const getRepositories = () => {

    fetch(('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=' + lat + '&longitude=' + lon + '&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US'), {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "25a22228abmshe90e31e943b8facp153abfjsn326786a3036f"
      }
    })

      .then(response => response.json())
      .then(data => setRavintolat(data.data))
      .catch(err => {
        console.error(err);
      });
  }

    return (
    <View>
      <Pressable
        style={[gStyle.button, gStyle.buttonOpen]}
        onPress={getRepositories}
      >
        <Text style={gStyle.title}>Hanki ravintoloita</Text>
      </Pressable>

      <FlatList
        data={ravintolat}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
        }}
        renderItem={({ item }) => (
        
          <View style={{flexDirection: 'row', padding: 10, marginVertical: 10, backgroundColor: '#ededed', borderRadius: 16, shadowColor: '#000'}}>
        
            <View>

            <Text style={{fontSize: 18}}>{item.name}</Text>

            {item.is_closed ? <Text style={{fontSize: 14}}>Kiini</Text> : <Text style={{fontSize: 14}}>Auki</Text>}  

            <Text style={{fontSize: 14}}>{item.address_obj &&
              item.address_obj.street1}</Text>

            <Text style={{fontSize: 14}}>{Math.round((item.distance * 1000))}m</Text>

            </View>

          </View>
        )}/>
    </View>
  );

}