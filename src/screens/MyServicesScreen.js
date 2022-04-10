import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Button, ButtonGroup, withTheme, SearchBar, Divider, Input } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyServicesScreen = ({navigation}) => {
  const { colors } = useTheme();
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(1);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);
    return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
       
         <ScrollView horizontal={false}>
         <Text style={{ color: colors.text }}>Recientes</Text>
       <Text style={{ color: colors.text }}>Recientes</Text>
         </ScrollView>
      
     
       <ScrollView horizontal={true}>
       <Text style={{ color: colors.text }}>Recientes</Text>
       <Text style={{ color: colors.text }}>Recientes</Text>
       </ScrollView>
    
       <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="User Form"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Name"
    />
      </SafeAreaView>
    );
};

export default MyServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
