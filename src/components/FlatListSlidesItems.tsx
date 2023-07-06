import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {SlideItem} from '../interfaces/appInterfaces';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  slideItem: SlideItem;
}

const FlatListSlidesItems = ({slideItem}: Props) => {
  const {width} = Dimensions.get('window');
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {width}]}>
      <Image source={slideItem.img} style={[styles.image]} />
      <View style={{flex: 0.3, paddingHorizontal: 30}}>
        <Text
          style={{
            ...styles.title,
            color: colors.primary,
          }}>
          {slideItem.title}
        </Text>

        <Text
          style={{
            ...styles.subTitle,
            color: colors.text,
          }}>
          {slideItem.desc}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default FlatListSlidesItems;
