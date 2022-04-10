import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign'

import HomeScreen from './HomeScreen';
import ServicesScreen from './ServicesScreen';
import MyServicesScreen from './MyServicesScreen';
import SettingsScreen from './SettingsScreen';

import EditProfileScreen from './EditProfileScreen';
const HomeStack = createStackNavigator();
const ServicesStack = createStackNavigator();
const MyServicesStack = createStackNavigator();
const SettingsStack = createStackNavigator();



const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Services"
      component={ServicesStackScreen}
      options={{
        tabBarLabel: 'Services',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon2 name="person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="My services"
      component={MyServicesSatckScreen}
      options={{
        tabBarLabel: 'My services',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon3 name="contacts" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Settings"
      component={SettingsSatckScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon3 name="setting" color={color} size={26} />
        ),
      }}
    />
    
 {/* Pantallas de settings*/}


  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home'
     }} />
  </HomeStack.Navigator>
);

const ServicesStackScreen = ({ navigation }) => (
  <ServicesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ServicesStack.Screen name="Services" component={ServicesScreen} options={{
    }} />
  </ServicesStack.Navigator>
);


const MyServicesSatckScreen = ({ navigation }) => (
  <MyServicesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <MyServicesStack.Screen name="My Services" component={MyServicesScreen} options={{
    }} />
  </MyServicesStack.Navigator>
);

const SettingsSatckScreen = ({ navigation }) => (
  <SettingsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{
     
    }} />
      <SettingsStack.Screen 
      name="EditProfile" 
      component={EditProfileScreen} 
      options={{
    }} />
   
  </SettingsStack.Navigator>
);


