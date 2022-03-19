// // import {useNavigation} from '@react-navigation/native';
// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// // import {Icon} from 'react-native-vector-icons/Icon';

// import Icon from 'react-native-vector-icons/Ionicons';

// import Home from '../Pages/Home';
// import Search from '../Pages/Search';

// const Navigation = () => {
//   return (
//     <View style={style.containerMax}>
//       <View style={style.container}>
//         <TouchableOpacity
//           style={[style.button, style.active]}
//           onPress={() => {
//             console.log('Clicked into Home');
//             // navigation.navigate('Home');
//           }}>
//           <Iconon name="home" size={35} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[style.button]}
//           onPress={() => {
//             console.log('Clicked into this');
//             // navigation.navigate('Search');
//           }}>
//           <Icon name="search" size={30} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={style.button}
//           onPress={() => {
//             console.log('Clicked into this');
//             // navigation.navigate('Trip');
//           }}>
//           <Icon name="calendar" size={30} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[style.button]}
//           onPress={() => {
//             console.log('Clicked into this');
//             // navigation.navigate('Guide');
//           }}>
//           <Icon name="map" size={30} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   containerMax: {
//     flex: 1,
//     position: 'absolute',
//     width: '100%',
//     bottom: 10,
//     alignItems: 'center',
//     padding: 6,
//     zIndex: 10,
//   },
//   container: {
// flex: 1,
// flexDirection: 'row',
// justifyContent: 'space-evenly',
// padding: 5,
// backgroundColor: 'white',
// height: '10%',
// width: '90%',
// borderRadius: 100,

// borderWidth: 2,
// borderColor: '#000000',

// shadowColor: '#000000',
// shadowOffset: {
//   width: 3,
//   height: 3,
// },
// shadowRadius: 10,
// shadowOpacity: 0.2,
//   },
//   button: {
//     // height: 40,
//     width: 80,
//     alignItems: 'center',
//     alignContent: 'center',
//     borderRadius: 80,
//     padding: 10,
//   },
//   active: {backgroundColor: '#FF4760', borderRadius: 100},
// });

// export default Navigation;
