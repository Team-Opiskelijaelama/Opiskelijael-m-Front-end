import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, FlatList, Image } from "react-native";

export default function Sitsilaulut() {

    const [laulut, setLaulut] = useState([]);
    
    const getSitsilaulut = () => {
        fetch(`https://opiskelijaelama.herokuapp.com/rest/laulut`)
        .then(response => response.json())
        .then(data => setLaulut(data))
        .catch(err => {
        console.error(err);
      });
}

    return (
        <View>
            <Button title="Luo laulukirja" onPress={getSitsilaulut} />

     <FlatList
        data={laulut}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
        }}
        renderItem={({ item }) => (
        
          <View style = {{ alignItems:"center", padding: 10, paddingHorizontal: 30, marginVertical: 10, backgroundColor: '#ededed', borderRadius: 16, shadowColor: '#000'}}>
              <Text>{item.lauluId}. {item.lauluNimi}</Text>
              {item.pakollinen ? <Text style={{fontSize: 11}}> (Pakollolinen) </Text> : <></>}
              <Text></Text>
              <Text>{item.sanat}</Text>
              


          </View>
        )}/>
        </View>
    );

}