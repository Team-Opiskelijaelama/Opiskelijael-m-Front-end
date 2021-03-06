import React, { useState, useCallback } from "react";
import {
   StyleSheet,
   Linking,
   Text,
   View,
   ScrollView,
   Modal,
   Pressable,
   Dimensions,
   TextInput,
   FlatList,
   Button,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Poytakirja() {
   const [modalVisible, setModalVisible] = useState(false);
   const gambinaurl = "http://www.gambina.fi/";

   const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
         const supported = await Linking.canOpenURL(url);

         if (supported) {
            await Linking.openURL(url);
         } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
         }
      }, [url]);

      return <Button title={children} onPress={handlePress} />;
   };

   const [meeting, setMeeting] = useState([
      {
         id: 0,
         section: "1.  Kokouksen avaus",
         text: "",
      },
      {
         id: 1,
         section: "2.  Kokouksen laillisuus ja päätösvaltaisuus",
         text: "",
      },
      {
         id: 2,
         section: "3.  Ilmoitusasiat ja posti",
         text: "",
      },
      {
         id: 3,
         section: "4.  Uusien kannatusjäsenten hyväksyminen",
         text: "",
      },
      {
         id: 4,
         section: "5.  Muut esille tulevat asiat",
         text: "",
      },
      {
         id: 5,
         section: "6.  Kokouksen päättäminen",
         text: "",
      },
   ]);

   const handlePress = (text, index) => {
      const newMeeting = [...meeting];
      newMeeting[index].text = text;

      setMeeting(newMeeting);
   };

   const headerComponent = () => (
      <View>
         <Text style={gStyle.title}>Kokouspöytäkirjaehdotus</Text>
      </View>
   );
   
   const footerComponent = () => (
      <View>
         <Pressable
            style={[gStyle.button]}
            onPress={() => setModalVisible(true)}
         >
            <Text style={gStyle.buttonText}>
               Katso täältä valmis kokouksesi
            </Text>
         </Pressable>

         <View style={styles.box}>
            <Text style={styles.text}>
               Pöytäkirjapohja on luotu Tampereen Akateemisesti Sivistyneet
               Gambinan Ystävien kokousohjeiden mukaisesti
            </Text>
         </View>

         <Pressable
            style={[gStyle.button, gStyle.buttonClose]}
            onPress={() => Linking.openURL(gambinaurl)}
         >
            <Text style={gStyle.title}>Kokousohjesäännöt</Text>
         </Pressable>
      </View>
   );

   const modalHeaderComponent = () => (
    <View>
       <Text style={gStyle.title}>Gambinakokous</Text>
    </View>
 );

   return (
      <View>
         <View>
            <FlatList
               data={meeting}
               keyExtractor={(item, index) => index.toString()}
               contentContainerStyle={{}}
               renderItem={({ item }) => (
                  <View style={styles.box}>
                     <Text style={gStyle.descriptionText}>{item.section}</Text>
                     <TextInput
                        onChangeText={(text) => handlePress(text, item.id)}
                        style={styles.input}
                        multiline={true}
                        placeholder="Voit kirjoittaa tähän"
                     >
                        {item.text}
                     </TextInput>
                  </View>
               )}
               ListHeaderComponent={headerComponent}
               ListFooterComponent={footerComponent}
            />
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
                        data={meeting}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{
                           padding: 10,
                        }}
                        renderItem={({ item }) => (
                           <View>
                              <Text style={gStyle.descriptionText}>
                                 {item.section}
                              </Text>
                              <Text style={gStyle.descriptionText}>
                                 {item.text}
                              </Text>
                           </View>
                        )}
                        ListHeaderComponent={modalHeaderComponent}
                     />

                     <Pressable
                        style={[gStyle.button, gStyle.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                     >
                        <Text style={gStyle.title}>Sulje</Text>
                     </Pressable>
                  </View>
               </View>
            </Modal>
         </View>
      </View>
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
   input: {},
});
