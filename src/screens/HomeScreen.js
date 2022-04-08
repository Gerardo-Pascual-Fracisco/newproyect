import React from 'react';
import { View, Text, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button, ButtonGroup, withTheme,SearchBar, Tile } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();
  const [value, setValue] = React.useState("");
  const theme = useTheme();
  
    return (
      <View style={styles.container}>
      <Text style={{color: colors.text}}>Recientes</Text>
      <ScrollView></ScrollView>

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
        <Tile
      activeOpacity={0.5}
      caption="Tile caption"
      captionStyle={{}}
      containerStyle={{}}
      contentContainerStyle={{}}
      height={300}
      iconContainerStyle={{}}
      imageContainerStyle={{}}
      imageProps={{}}
      imageSrc="SampleImage"
      onPress={() => console.log("imageProps()")}
      overlayContainerStyle={{}}
      titleStyle={{}}
      width={400}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
