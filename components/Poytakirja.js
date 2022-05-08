import React, { useState, useEffect } from 'react';
import { LogBox, Text, View, ScrollView, Modal, Pressable, Dimensions, TextInput, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Poytakirja() {


    const [modalVisible, setModalVisible] = useState(false);

    const [meeting, setMeeting] = useState([
        {
            id: 0, section: "1.  Kokouksen avaus", text:""
        },
        {
            id: 1, section: "2.  Kokouksen laillisuus ja päätösvaltaisuus", text:""
        },
        {
            id: 2, section: "3.  Ilmoitusasiat ja posti", text:""
        },
        {
            id: 3, section: "4.  Uusien kannatusjäsenten hyväksyminen", text:""
        },
        {
            id: 4, section: "5.  Muut esille tulevat asiat", text:""
        },
        {
            id: 5, section: "6.  Kokouksen päättäminen", text:""
        }
    ]);

    const handlePress = (text, index) => {
        const newMeeting = [...meeting]
        newMeeting[index].text = text
    
        setMeeting(newMeeting)
      };

    
    
  return (
    <ScrollView>
      <View>

        <Text style={gStyle.title}>Kokouspöytäkirjaehdotus</Text>
        
        <FlatList
        data={meeting}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
        }}
        renderItem={({ item }) => (
            <View> 
                <Text style={gStyle.descriptionText}>{item.section}</Text>
                <TextInput 
                    onChangeText={text => handlePress(text, item.id)}
                    style={gStyle.input}
                    multiline={true}
                    placeholder='Voit kirjoittaa tähän'
                >{item.text}</TextInput>
            </View>

        )}/>
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

              
            <Text style={gStyle.title}>Gambinakokous</Text>

            <FlatList
                data={meeting}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle = {{
                padding: 10,
                }}
                renderItem={({ item }) => (
                    <View> 
                        <Text style={gStyle.descriptionText}>{item.section}</Text>
                        <Text style={gStyle.descriptionText}>{item.text}</Text>

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
          <Text style={gStyle.title}>Katso täältä valmis kokouksesi</Text>
        </Pressable>

        <Text style={gStyle.descriptionText}>
            Pöytäkirjapohja on luotu Tampereen Akateemisesti Sivistyneet Gambinan Ystävien kokousohjeiden mukaisesti
        </Text>
        {/*<Pressable
          style={[gStyle.button, gStyle.buttonOpen]}
          onPress={() => {
            window.location.href='http://www.gambina.fi/';
            }}
        >
          <Text style={gStyle.title}>Kokousohjesääntö</Text>
        </Pressable>*/}
        


      </View>
    </ScrollView>
  );
}