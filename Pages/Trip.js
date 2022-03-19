import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacityComponent,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, Chip, Paragraph, TextInput, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Trip = () => {
  let [text, updateText] = useState('Trips');

  const Trips = () => {
    return (
      <View style={style.midcontainer}>
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 30,
          }}>
          <ImageBackground
            borderRadius={5}
            source={require('../Images/imag1.jpeg')}
            style={style.imageBackground1}>
            <View style={style.centerTag}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
                Ho Chi min City
              </Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                Wed 29 Dec - 31 Dec
              </Text>
            </View>
            <View style={style.bottomTag}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                5 Items
              </Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                5 Days left
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            width: '100%',
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
          }}>
          <View
            style={{borderRadius: 10, backgroundColor: 'tomato', padding: 20}}>
            <Text
              style={{
                color: 'white',
                paddingBottom: 10,
                fontSize: 20,
                fontWeight: '800',
              }}>
              Here's checklist for your trip
            </Text>
            <Text
              style={{
                color: 'white',
                paddingBottom: 10,
                fontSize: 15,
                fontWeight: '600',
              }}>
              As your upcoming destination has some Travel restriction due to
              COVID-19
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={style.containerUltraProMax}>
      <View style={style.guideContainer}>
        <Text style={style.guide}>Trip Plan</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'flex-start',
          width: '100%',
          paddingLeft: 10,
        }}>
        <TouchableOpacity
          style={text === 'Trips' ? style.viewDesignActive : style.viewDesign}
          onPress={() => updateText('Trips')}>
          <Icon
            name="home"
            size={25}
            style={text === 'Trips' ? {color: '#FF4760'} : {}}
          />
          <Text
            style={
              text === 'Trips' ? style.textDesignActive : style.textDesign
            }>
            Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            text === 'Bookmarks' ? style.viewDesignActive : style.viewDesign
          }
          onPress={() => updateText('Bookmarks')}>
          <Icon
            name="bookmark"
            size={25}
            style={text === 'Bookmarks' ? {color: '#FF4760'} : {}}
          />
          <Text
            style={
              text === 'Bookmarks' ? style.textDesignActive : style.textDesign
            }>
            Bookmarks
          </Text>
        </TouchableOpacity>
      </View>

      {text === 'Trips' ? (
        <Trips />
      ) : (
        <View style={[style.midcontainer, {marginTop: 20}]}>
          <Text>Bookmarks Page</Text>
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  containerUltraProMax: {
    flex: 1,
    paddingTop: 50,
  },
  guide: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '900',
  },
  guideContainer: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
  },
  mntContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: '3%',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageBackground1: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  centerTag: {
    position: 'relative',
    alignItems: 'center',
    top: 50,
  },
  bottomTag: {
    padding: 5,
    position: 'relative',
    top: 80,
    left: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
  },
  centerDestination: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midcontainer: {
    alignItems: 'center',
  },
  viewDesign: {marginRight: 20, padding: 5, flexDirection: 'row'},
  viewDesignActive: {
    marginRight: 20,
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderColor: '#FF4760',
  },
  textDesign: {fontSize: 18, fontWeight: '700', marginLeft: 10},
  textDesignActive: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: '#FF4760',
  },
});

export default Trip;
