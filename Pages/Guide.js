import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacityComponent,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';

import {Card, Chip, Paragraph, TextInput, Title} from 'react-native-paper';
import axios from 'axios';

const APIkey = 'WPrqAtDL8tytBGCu9m4bso_gj4xblNIp_CblnGxvtUs';

const Guide = () => {
  let [show, updateShow] = useState([]);
  let [txt, updateText] = useState('');
  let [txtShow, updateTextShow] = useState('Nature');
  let [page, updatePage] = useState(1);

  useEffect(() => {
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${txtShow}&client_id=${APIkey}`;

    console.log('text-->', txtShow);
    console.log('use effect triggered');

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
    return (
      <>
        <Card style={{width: 260, marginRight: 10}}>
          <Card.Cover
            source={{uri: x.item.urls.regular}}
            style={{width: 260, height: 150}}
          />
          <Card.Content>
            <Title style={{color: 'blue'}}>{txtShow}</Title>
            <Paragraph>{x.item.alt_description}</Paragraph>
          </Card.Content>
        </Card>
      </>
    );
  };

  return (
    <View style={style.containerUltraProMax}>
      <View style={style.guideContainer}>
        <Text style={style.guide}>Guide</Text>
      </View>
      <View style={style.mntContainer}>
        <Text style={style.mntText}>MIGHT NEED THESE</Text>
        <Text style={style.seeAllText}>See All</Text>
      </View>

      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          maxHeight: '23%',
        }}>
        <ImageBackground
          source={require('../Images/Guide/image1.jpeg')}
          style={style.IM1}>
          <Text style={style.IMText}>Budget Travel</Text>
        </ImageBackground>
        <ImageBackground
          source={require('../Images/Guide/image2.jpeg')}
          style={style.IM1}>
          <Text style={style.IMText}>First Time Abroad</Text>
        </ImageBackground>
        <ImageBackground
          source={require('../Images/Guide/image3.jpeg')}
          style={style.IM1}>
          <Text style={style.IMText}>Safe Travel</Text>
        </ImageBackground>
      </View>

      <View style={{width: '100%', marginTop: 10, marginBottom: 10}}>
        <TextInput
          right={<TextInput.Icon name="search-web" color={'red'} />}
          placeholder="A country, a city... or anything"
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 10,
            marginRight: 10,
          }}
          value={txt}
          onChangeText={text => updateText(text)}
          onSubmitEditing={() => {
            refresh();
            if (txt) {
              updateTextShow(txt);
            } else {
              updateTextShow('Matrina Bay');
            }
          }}
        />
      </View>

      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          maxHeight: 30,
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            refresh();
            updateTextShow('Sightseeing');
          }}
          style={style.chip}>
          <MIcon name="attractions" size={25} color={'blue'} />
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 5,
            }}>
            Sightseeing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.chip}
          onPress={() => {
            refresh();
            updateTextShow('Resort');
          }}>
          <MIcon name="wine-bar" size={25} color={'blue'} />
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 5,
            }}>
            Resort
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            refresh();
            updateTextShow('Restaurant');
          }}
          style={style.chip}>
          <MIcon name="restaurant" size={25} color={'blue'} />
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 5,
            }}>
            Restaurant
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.mntContainer}>
        <Text style={style.mntText}>TOP-PICK ARTICLES</Text>
      </View>

      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          paddingLeft: 10,
          minHeight: 100,
        }}>
        {show.length > 0 ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={show}
            renderItem={renderItem}
            keyExtractor={x => x.id}
            onScrollEndDrag={() => {
              console.log('At the last', page);
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
    marginTop: 20,
    marginBottom: 10,
  },
  mntText: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 15,
  },
  seeAllText: {
    color: '#FF4760',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  IMText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
  IM1: {
    backgroundColor: 'orange',
    height: 150,
    width: 120,
    borderRadius: 100,
    marginLeft: 10,
  },
  chip: {
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
});

export default Guide;
