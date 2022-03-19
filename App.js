import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigation from './Components/Navigation';
import Home from './Pages/Home.js';
import Guide from './Pages/Guide';
import Search from './Pages/Search';
import Trip from './Pages/Trip';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Guide') {
                iconName = 'calendar';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Trip') {
                iconName = 'map';
              }

              return <Icon name={iconName} size={30} color="black" />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: '#FF4760',
            tabBarItemStyle: {
              width: 70,
              alignItems: 'center',
              alignContent: 'center',
              borderRadius: 50,
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: '2%',
              left: '5%',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              // padding: 4,
              backgroundColor: 'white',
              height: '8%',
              width: '90%',
              borderRadius: 100,
              shadowColor: '#000000',
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowRadius: 10,
              shadowOpacity: 0.2,
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Guide" component={Guide} />
          <Tab.Screen name="Trip" component={Trip} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <Home /> */}
      {/* <Trip />
      <Guide />
      <Search /> */}
      {/* <Navigation /> */}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
