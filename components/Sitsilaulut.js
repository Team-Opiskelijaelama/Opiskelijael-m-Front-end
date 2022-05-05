import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, FlatList, Image, Pressable, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { gStyle } from '../styles/style';

export default function Sitsilaulut() {

    const [laulut, setLaulut] = useState([]);
    const [loading, setLoading] = useState(false);

    const randomSong = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
    
    const getSitsilaulut = async () => {
      try {
        const response = await
          fetch(`https://opiskelijaelama.herokuapp.com/rest/laulut`);
        const json = await response.json();
        setLaulut(json);
        console.log(laulut);
        setLoading(true);
          } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

  useEffect(() => { getSitsilaulut() }, []);

  return (
    
    <ScrollView>

    {loading ?

    <View>

    <View style={styles.box}>
      <Text style={styles.text}>1. {laulut[0].lauluNimi} (Pakollinen){"\n"}</Text>
      <Text style={styles.text}>{laulut[0].sanat}</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>2. {laulut[1].lauluNimi} (Pakollinen){"\n"}</Text>
      <Text style={styles.text}>{laulut[1].sanat}</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>3. {laulut[2].lauluNimi} (Pakollinen){"\n"}</Text>
      <Text style={styles.text}>{laulut[2].sanat}</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>4. {laulut[3].lauluNimi} (Pakollinen){"\n"}</Text>
      <Text style={styles.text}>{laulut[3].sanat}</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>5. {laulut[randomSong].lauluNimi} {"\n"}</Text>
      <Text style={styles.text}>{laulut[randomSong].sanat}</Text>
    </View>

     {/* <FlatList
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
        )}/> */}

    </View> : <View style={gStyle.loading}>
      <ActivityIndicator size="large" color='#FF6FB5'/>
    </View>

    }
      
    </ScrollView>
    );

}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
 },
  text: {
    fontSize: 14,
    color: 'black',
 },


});