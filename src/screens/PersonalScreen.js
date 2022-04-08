import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button, ButtonGroup, withTheme, SearchBar, Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const PersonalScreen = ({ navigation }) => {
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
       
       <ScrollView horizontal={true}>
       <Text style={{ color: colors.text }}>Recientes</Text>
       <Text style={{ color: colors.text }}>Recientes</Text>
       </ScrollView>
     
       <Text style={{ color: colors.text }}>Recientes</Text>

       <ScrollView horizontal={true}>
       <Text style={{ color: colors.text }}>Recientes</Text>
       <Text style={{ color: colors.text }}>Recientes</Text>
       </ScrollView>

      <Divider
        style={{ width: "100%", margin: 20 }}
        color="#2089dc"
        insetType="left"
        subHeaderStyle={{}}
        width={10}
        orientation="horizontal"
      />
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
      <Divider
        style={{ width: "100%", margin: 20 }}
        color="#2089dc"
        insetType="left"
        subHeaderStyle={{}}
        width={10}
        orientation="horizontal"
      />
      <Text style={{ color: colors.text }}>Recientes</Text>
    
      <ScrollView horizontal={true}>
      <Text style={{ color: colors.text }}>Recientes</Text>
       <Text style={{ color: colors.text }}>Recientes</Text>
      </ScrollView>


    </SafeAreaView>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
