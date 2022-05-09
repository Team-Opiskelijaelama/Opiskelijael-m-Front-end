import { useEffect, useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   ActivityIndicator,
   Dimensions,
   ScrollView,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Sitsilaulut() {
   const [songs, setSongs] = useState([]);
   const [loading, setLoading] = useState(false);

   const randomSong = Math.floor(Math.random() * (12 - 4 + 1)) + 4;

   const getSongs = async () => {
      try {
         const response = await fetch(
            `https://opiskelijaelama.herokuapp.com/rest/laulut`
         );
         const json = await response.json();
         setSongs(json);
         setLoading(true);
      } catch (error) {
         Alert.alert("haku ei toimi. virheilmoitus:" + toString(error));
      }
   };

   useEffect(() => {
      getSongs();
   }, []);

   return (
      <ScrollView>
         {loading ? (
            <View>
               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     1. {songs[0].lauluNimi} (Pakollinen){"\n"}
                  </Text>
                  <Text style={styles.text}>{songs[0].sanat}</Text>
               </View>

               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     2. {songs[1].lauluNimi} (Pakollinen){"\n"}
                  </Text>
                  <Text style={styles.text}>{songs[1].sanat}</Text>
               </View>

               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     3. {songs[2].lauluNimi} (Pakollinen){"\n"}
                  </Text>
                  <Text style={styles.text}>{songs[2].sanat}</Text>
               </View>

               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     4. {songs[3].lauluNimi} (Pakollinen){"\n"}
                  </Text>
                  <Text style={styles.text}>{songs[3].sanat}</Text>
               </View>

               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     5. {songs[randomSong].lauluNimi} {"\n"}
                  </Text>
                  <Text style={styles.text}>{songs[randomSong].sanat}</Text>
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
            </View>
         ) : (
            <View style={gStyle.loading}>
               <ActivityIndicator size="large" color="#FF6FB5" />
            </View>
         )}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   box: {
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "white",
      width: Dimensions.get("screen").width - 40,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
   },
   textTitle: {
      fontSize: 14,
      color: "black",
      fontWeight: "bold",
   },
   text: {
      fontSize: 14,
      color: "black",
   },
});
