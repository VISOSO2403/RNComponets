import {
  View,
  Text,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, {useContext, useReducer, useState} from 'react';
import useAnimation from '../hooks/useAnimation';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          // width: '100%',
          // height: 400,
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
