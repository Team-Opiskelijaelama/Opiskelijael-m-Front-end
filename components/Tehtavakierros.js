import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { gStyle } from '../styles/style';

export default function Tehtavakierros() {

    const [tasks, setTasks] = useState([]);    
    const [loading, setLoading] = useState(false);
    
    const getTasks = async () => {
      try {
        const response = await
          fetch(`https://opiskelijaelama.herokuapp.com/rest/tehtavat`)
        const json = await response.json();
        setTasks(json);
        console.log(tasks);
        setLoading(true);
          } catch (error) {
      Alert.alert("haku ei toimi. virheilmoitus:" + toString(error))
    }
  };

    useEffect(() => { getTasks() }, []);

    return (
      <View>

      {loading ?

      <View style={styles.allButtons}>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle = {{
          padding: 10,
        }}
        renderItem={({ item }) => (
        
      <View style={styles.box}>
        <Text style={styles.text}>{item.tehtavaId}. {item.tehtavaNimi}</Text>
        <Text style={styles.text}>{item.tehtavaKuvaus}</Text>
      </View>
        )}/>

        </View> : <View style={gStyle.loading}>
          <ActivityIndicator size="large" color='#FF6FB5'/>
        </View>

        }

        </View>
    );
}

const styles = StyleSheet.create({
  allButtons: {
    alignItems: 'center', 
  },
  box: {
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    width: 340,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
 },
  text: {
    fontSize: 14,
    color: 'black',
 },


});