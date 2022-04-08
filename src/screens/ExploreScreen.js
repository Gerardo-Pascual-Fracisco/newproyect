import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExploreScreen = ({navigation}) => {
    return (

      <View style={styles.container}>
     
        <Button 
        buttonStyle={{
                borderRadius: 15,
                paddingVertical: 15,
                paddingHorizontal: 100,   
                marginHorizontal: 25,
                marginVertical: 5,    
        }}
        title="Información Personal" 
        type="solid"
        icon={<Icon name="file-document" color="#ffffff" size={26} />}
        onPress={() => navigation.navigate("Personal")}
        />

        <Button 
        buttonStyle={{
                borderRadius: 15,
                paddingVertical: 15,
                paddingHorizontal: 100,   
                marginHorizontal: 25,
                marginVertical: 5,  
        }}
        title="Atención al Cliente" 
        type="solid"
        icon={<Icon name="assistant" color="#ffffff" size={26} />}
        onPress={() => alert('Button Clicked!')}
        />

<Button 
        buttonStyle={{
                borderRadius: 15,
                paddingVertical: 15,
                paddingHorizontal: 100,   
                marginHorizontal: 25,
                marginVertical: 5,    
        }}
        title="Informe de la Cuenta" 
        type="solid"
        icon={<Icon name="attachment" color="#ffffff" size={26} />}
        onPress={() => alert('Button Clicked!')}
        />
        <Button 
        buttonStyle={{
                borderRadius: 15,
                paddingVertical: 15,
                paddingHorizontal: 100,   
                marginHorizontal: 25,
                marginVertical: 100,
                
        }}
        title="Cerrar Sesion" 
        type="solid"
        icon={<Icon name="backspace-reverse" color="#ffffff" size={26} />}
        onPress={() => alert('Button Clicked!')}
        />
      </View>
      
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  butA1:{
    height: 47,
    width: 326,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 21,
    overflow: "visible",
    borderWidth: 1,
    borderColor: "rgba(225,114,13,1)"

  }
});
