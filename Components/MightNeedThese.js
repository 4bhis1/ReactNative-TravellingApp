import React from 'react';
import {ImageBackground} from 'react-native';

const MightNeedThese = props => {
  return (
    <ImageBackground
      source={props.src}
      height={props.height}
      width={props.width}>
      <Text>{props.text}</Text>
    </ImageBackground>
  );
};

export default MightNeedThese;
