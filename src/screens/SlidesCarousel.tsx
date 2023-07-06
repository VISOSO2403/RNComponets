import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import FlatListSlidesItems from '../components/FlatListSlidesItems';
import useAnimation from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/theme/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesCarousel = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}: any) => <FlatListSlidesItems slideItem={item} />}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      {/* Footer */}
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 50,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text
              style={{
                fontSize: 15,
                textTransform: 'uppercase',
                fontWeight: '500',
                color: colors.text,
              }}>
              Entrar
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesCarousel;
