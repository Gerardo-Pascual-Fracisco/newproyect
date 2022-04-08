import React from 'react';
import { View, Text, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button, ButtonGroup, withTheme,SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({navigation}) => {
  const { colors } = useTheme();
  const [value, setValue] = React.useState("");
  const theme = useTheme(); 
  return (
      <View style={styles.container}>
       
       <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
       <SearchBar 
        platform="android"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={newVal => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
       />
       <Text style={{color: colors.text}}>Populares</Text>
         <Button 
        buttonStyle={{
                borderRadius: 20,
                paddingVertical: 12,
                paddingHorizontal: 100,   
                marginHorizontal: 25,
                marginVertical: 5,    
        }}
        title="Administrar Perfil" 
        type="solid"
        icon={<Icon name="file-document" color="#ffffff" size={26} />}
        onPress={() => alert('Button Clicked!')}
        />
<Text style={{color: colors.text}}>Recientes</Text>
        
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
<ScrollView></ScrollView>
      
    
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
