import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button 
       title="Solid" 
       type="Outline" icon="home"  
       onPress={() => navigation.navigate("Details")}/>

        <Button
          title="Confidu"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
