import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View, Button, FlatList, Image, Pressable } from "react-native";
import { gStyle } from '../styles/style';

export default function Tehtavat() {

    const [tehtavat, setTehtavat] = useState([]);
    
    const getTehtavat = () => {
        fetch(`https://opiskelijaelama.herokuapp.com/rest/tehtavat`)
        .then(response => response.json())
        .then(data => setTehtavat(data))
        .catch(err => {
        console.error(err);
        
      });
    }


    

    return (
      <ScrollView>
        <Pressable
          style={[gStyle.button, gStyle.buttonOpen]}
          onPress={getTehtavat}
        >
          <Text style={gStyle.title}>Luo tehtäviä</Text>
        </Pressable>

      <FlatList
        data={tehtavat}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
        }}
        renderItem={({ item }) => (
        
          <View style = {{ alignItems:"center", padding: 10, paddingHorizontal: 30, marginVertical: 10, backgroundColor: '#ededed', borderRadius: 16, shadowColor: '#000'}}>
              <Text>{item.tehtavaNimi}</Text>
              <Text>{item.tehtavaKuvaus}</Text>
              


          </View>
        )}/>
        </ScrollView>
    );
}