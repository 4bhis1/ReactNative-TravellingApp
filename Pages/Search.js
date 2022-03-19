import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Paragraph, TextInput, Title} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

// var debounce = require('lodash.debounce');
import {debounce} from 'lodash';

const APIkey = 'WPrqAtDL8tytBGCu9m4bso_gj4xblNIp_CblnGxvtUs';

const arr = [];

const Search = () => {
  let [show, updateShow] = useState([]);
  let [page, updatePage] = useState(1);
  let [txt, updateText] = useState('');
  let [txtShow, updateTextShow] = useState('Marina Bay');

  useEffect(() => {
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${txtShow}&client_id=${APIkey}`;

    // console.log('text-->', txtShow);

    axios
      .get(url)
      .then(y => {
        show = show.concat(y.data.results);
        updateShow(show);
      })
      .catch(error => console.log(error));
  }, [txt, page, txtShow]);

  const refresh = () => {
    page = 1;
    updatePage(page);
    show = [];
    updateShow(show);
    // console.log('Refresg funciton triggered');
  };

  const renderItem = x => {
    // console.log(x.item.id);
    return (
      <>
        <ImageBackground
          borderRadius={10}
          source={{uri: x.item.urls.regular}}
          style={style.imageBackground1}>
          <View style={style.topLeftCornertag}>
            <Text
              style={{
                color: 'white',
                backgroundColor: '#FF4760',
                padding: 5,
                fontSize: 18,
              }}>
              {txtShow}
            </Text>
            {/* <TouchableOpacity
            onPress={() => {
              // arr.push(x.item.urls.regular);
              // console.log('Array -> ', arr);
              console.log('Clicked');
            }}> */}
            <Icon name="bookmark" color={'white'} size={30} />
            {/* </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </>
    );
  };

  const debounceSave = useCallback(
    debounce(q => {
      console.log('Triggred debounce');
      console.log(q);

      refresh();
      if (q) {
        updateTextShow(q);
      } else {
        updateTextShow('Matrina Bay');
      }
    }, 300),
    [],
  );

  const onChangeSearch = q => {
    updateText(q);
    debounceSave(q);
  };

  return (
    <View style={style.containerUltraProMax}>
      <View style={style.guideContainer}>
        <Text style={style.guide}>Search</Text>
      </View>

      <View style={{width: '100%'}}>
        <TextInput
          right={<TextInput.Icon name="search-web" color={'red'} size={40} />}
          placeholder="A country, a city... or anything"
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            borderWidth: 2,
            borderColor: 'gray',
          }}
          autoCorrect={true}
          value={txt}
          onChangeText={onChangeSearch}
          onSubmitEditing={e => {
            refresh();
            if (txt) {
              updateTextShow(txt);
            } else {
              updateTextShow('Matrina Bay');
            }
          }}
        />
      </View>

      <View style={style.mntContainer}>
        <Text style={style.mntText}>TOP DESTINATIONS</Text>
      </View>

      <View
        style={{
          width: '100%',
          marginLeft: 20,
          flexDirection: 'row',
          height: 200,
        }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ImageBackground
            borderRadius={5}
            source={require('../Images/Search/tokyo.jpeg')}
            style={style.imageBackground}
            resizeMode="cover">
            <View style={style.centerDestination}>
              <Text style={style.city}>Tokyo</Text>
              <Text style={style.country}>Japan</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            borderRadius={5}
            source={require('../Images/Search/sydney.jpeg')}
            style={style.imageBackground}>
            <View style={style.centerDestination}>
              <Text style={style.city}>Sydney</Text>
              <Text style={style.country}>Australia</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            borderRadius={5}
            source={require('../Images/Search/norwAY.jpeg')}
            style={style.imageBackground}>
            <View style={style.centerDestination}>
              <Text style={style.city}>Astfold</Text>
              <Text style={style.country}>Norway</Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>

      <View
        style={{
          width: '100%',
          paddingLeft: 10,
          marginBottom: 20,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: '800', color: '#000000'}}>
          NEARBY ATTRACTIONS
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          paddingLeft: 30,
          // height: 320,
          paddingRight: 30,
        }}>
        {show.length > 0 ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={show}
            renderItem={renderItem}
            keyExtractor={x => x.id + '' + Math.random() * 1000}
            onScrollEndDrag={() => {
              // console.log('At the last');
              page++;
              updatePage(page);
            }}
          />
        ) : (
          console.log('NO data Available')
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerUltraProMax: {
    flex: 1,
    alignItems: 'center',
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
  mntText: {
    color: '#000000',
    fontWeight: '600',
  },
  imageBackground: {
    width: 150,
    maxHeight: 190,
    borderRadius: 100,
    marginRight: 10,
  },
  city: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: '800',
  },
  country: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  imageBackground1: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  topLeftCornertag: {
    padding: 5,
    // width: '15%',
    position: 'relative',
    top: 10,
    left: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
  },
  centerTag: {
    position: 'relative',
    alignItems: 'center',
    top: 30,
  },
  bottomTag: {
    padding: 5,
    position: 'relative',
    top: 50,
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
});

export default Search;

// tata aig group medical
