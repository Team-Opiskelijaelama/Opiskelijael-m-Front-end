import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { gStyle } from "../styles/style";

export default function Juomapeli() {
   const [game, setGame] = useState({});

   const fetchGames = async () => {
      try {
         const response = await fetch(
            `https://opiskelijaelama.herokuapp.com/rest/juomapelit`
         );
         const json = await response.json();
         setGame(json);
      } catch (error) {
         Alert.alert("haku ei toimi. virheilmoitus:" + toString(error));
      }
   };

   useEffect(() => {
      fetchGames();
   }, []);

   const listSeparator = () => {
      return <View style={gStyle.listseparator} />;
   };

   return (
      <View>
         <FlatList
            data={game}
            renderItem={({ item }) => (
               <View style={styles.box}>
                  <Text style={styles.textTitle}>
                     Nimi: {item.juomapeliNimi}
                     {"\n"}
                  </Text>
                  <Text style={styles.text}>Tarvikkeet: {item.tarvikkeet}</Text>
                  <Text>Säännöt: {item.juomapeliSaannot}</Text>
               </View>
            )}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={listSeparator}
         />
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
});
