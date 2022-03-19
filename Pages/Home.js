import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const APIkey = 'WPrqAtDL8tytBGCu9m4bso_gj4xblNIp_CblnGxvtUs';

const ImageToRender = x => {
  return <Image source={{uri: x.src}} style={style.imageInScroll} />;
};

const Home = () => {
  let [show, updateShow] = useState([]);
  let [txt, updateText] = useState('travel');
  let [page, updatePage] = useState(1);

  useEffect(() => {
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${txt}&client_id=${APIkey}`;

    console.log('text-->', txt);

    axios
      .get(url)
      .then(y => {
        show = show.concat(y.data.results);
        updateShow(show);
      })
      .catch(error => console.log(error));
  }, [txt, page]);

  const refresh = () => {
    page = 1;
    updatePage(page);
    show = [];
    updateShow(show);
  };

  const renderItem = x => {
    return <ImageToRender src={x.item.urls.regular} />;
  };

  return (
    <>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../Images/Home/first.png')}
          style={{
            flex: 7,
            shadowColor: '#000000',
            shadowOffset: {
              height: 10,
            },
            shadowRadius: 10,
            shadowOpacity: 0.8,
          }}>
          <View style={style.topContainer}>
            <Image
              source={require('../Images/Home/image3.jpeg')}
              style={style.userPhoto}
            />
            <View
              style={{
                flex: 8,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={style.userIcon}>
                <Icon name="qrcode" size={25} color={'white'} />
              </View>
              <View style={style.userIcon}>
                <Icon name="bell" size={25} color={'white'} />
              </View>
            </View>
          </View>

          <Text style={style.question}>Where's your next destination?</Text>

          <View style={style.travelingMode}>
            <View style={style.travelingContent}>
              <MaIcon
                name="airplane-takeoff"
                size={40}
                color={'white'}
                style={style.travelingLogo}
              />
              <Text style={style.travelingText}>Flights</Text>
            </View>
            <View style={style.travelingContent}>
              <Icon5
                name="hotel"
                size={30}
                color={'white'}
                style={style.travelingLogo}
              />
              <Text style={style.travelingText}>Hotels</Text>
            </View>
            <View style={style.travelingContent}>
              <Icon5
                name="car"
                size={40}
                color={'white'}
                style={style.travelingLogo}
              />
              <Text style={style.travelingText}>Car</Text>
            </View>
            <View style={style.travelingContent}>
              <MaIcon
                name="taxi"
                size={40}
                color={'white'}
                style={style.travelingLogo}
              />
              <Text style={style.travelingText}>Taxi</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={style.bottomContainer}>
          <Text style={style.deals}>Deals</Text>
          <View style={style.tags}>
            <TouchableOpacity
              style={[
                txt === 'travel' ? style.tagsElementActive : style.tagsElement,
              ]}
              onPress={() => {
                updateText('travel');
                refresh();
              }}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                txt === 'flight' ? style.tagsElementActive : style.tagsElement,
              ]}
              onPress={() => {
                updateText('flight');
                refresh();
              }}>
              <Text>Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                txt === 'Hotel' ? style.tagsElementActive : style.tagsElement,
              ]}
              onPress={() => {
                console.log('Hotels');
                refresh();
                updateText('Hotel');
              }}>
              <Text>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                txt === 'transport'
                  ? style.tagsElementActive
                  : style.tagsElement,
              ]}
              onPress={() => {
                updateText('transport');
                refresh();
              }}>
              <Text>Transportations</Text>
            </TouchableOpacity>
          </View>
          <View style={style.scroll}>
            {show.length > 0 ? (
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={show}
                renderItem={renderItem}
                keyExtractor={x => x.id}
                onScrollEndDrag={() => {
                  page++;
                  updatePage(page);
                }}
              />
            ) : (
              console.log('no data available')
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 64,
    left: 16,
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 6,
    paddingTop: 10,
    paddingLeft: 10,
  },
  userIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  userPhoto: {
    borderRadius: 100,
    height: 40,
    width: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    top: 180,
    left: 16,
    fontWeight: 'bold',
  },
  travelingContent: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelingText: {
    color: 'white',
    marginTop: 10,
    fontWeight: '800',
  },
  travelingMode: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 20,
  },
  travelingLogo: {
    textAlign: 'center',
    height: 60,
    width: 60,
    textAlignVertical: 'center',
  },
  deals: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 20,
  },
  tags: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    maxHeight: '10%',
  },
  tagsElement: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: '700',
    padding: 4,
  },
  tagsElementActive: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: '700',
    padding: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#FF4760',
  },
  scroll: {
    // backgroundColor: 'blue',
    height: '50%',
    marginTop: 20,
    padding: 5,
    paddingLeft: 0,
    zIndex: 0,
  },
  imageInScroll: {
    height: 135,
    width: 200,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Home;
