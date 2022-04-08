import { useTheme } from '@react-navigation/native';
import { Button, ButtonGroup, withTheme, SearchBar, Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, StatusBar, FlatList, Text, View, ScrollView, Image, } from "react-native";
import axios from 'axios';

const URL = 'http://localhost:8000/api/user/1'
const PersonalScreen = ({ navigation }) => {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getlibros()
  }, [])

  const getlibros = async () => {
    axios.get(URL)
      .then(({ data }) => {
        console.log(data)
        setData(data.usuario)
        console.log(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
           
       <ScrollView horizontal={true}>
       <FlatList
          data={data}
          renderItem={({ item }) => (

            <View>
              <Text>  Nombre: {item.name}  </Text>
              <Text>  Email: {item.email}  </Text>
            </View>

          )}
          keyExtractor={item => item.id.toString()}
        />
       </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  Image: {
    paddingLeft: 0,
  },
  ViewA1: {
    borderColor: "orange",
    color: "black",
    backgroundColor: "white",
    borderColor: "orange",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "left",
  },
  InputA1: {
    borderColor: "orange",
    padding: "5% 25%",

    backgroundColor: "white",
    color: "black",
    borderRadius: 5,
    margin: "10px 0px",
    textAlign: "left",
  },
  ViewA2: {
    borderColor: "orange",
    color: "black",
    backgroundColor: "white",
    margin: "10px 0px",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "left",
  
  },
  InputA2: {
    borderColor: "purple",
    fontSize: 20,
    padding: "25% 30%",

    backgroundColor: "white",
    color: "black",
    borderRadius: 5,
    margin: "10px 0px",
    textAlign: "left",
  },
  ButtonA1: {
    backgroundColor: "#138d75",

    color: "#fdfefe",
    borderColor: "black",
    fontSize: 20,
    padding: "5px 5px",
    borderRadius: 15,
    margin: "10px 0px",
    //cursor: "pointer",
    textAlign: "left",
  },

});