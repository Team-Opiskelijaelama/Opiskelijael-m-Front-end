import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, FlatList, Image, Pressable, ActivityIndicator, Dimensions } from "react-native";
import { gStyle } from '../styles/style';

export default function Sitsilaulut() {

    const [laulut, setLaulut] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getSitsilaulut = async () => {
      try {
        const response = await
          fetch(`https://opiskelijaelama.herokuapp.com/rest/laulut`);
        const json = await response.json();
        setLaulut(json);
        setLoading(true);
          } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { getSitsilaulut() }, []);

  return (
    
    <View>

    {loading ?

    <View>

    <View style={styles.box}>
      <Text style={styles.text}>1. {laulut[0].lauluNimi} (Pakollinen)</Text>
      <Text>{laulut[0].sanat}</Text>
    </View>

     <FlatList
        data={laulut}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
      }}
      renderItem={({ item }) => (
        
        <View style = {{ alignItems:"center", padding: 10, paddingHorizontal: 30, marginVertical: 10, backgroundColor: '#ededed', borderRadius: 16, shadowColor: '#000'}}>
            <Text>{item.lauluId}. {item.lauluNimi}</Text>
              {item.pakollinen ? <Text style={{fontSize: 11}}> (Pakollinen) </Text> : <></>}
            <Text>Sävel: {item.savel}</Text>
              <Text></Text>
            <Text>{item.sanat}</Text>
        </View>
        )}/>

    </View> : <ActivityIndicator size="large" color='#FF6FB5' />

    }
      
    </View>
    );

}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 40,
    height: 360,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
 },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

 },

});