import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {slideItems} from '../data/slidesItems';
import FlatListSlidesItems from '../components/FlatListSlidesItems';
import Icon from 'react-native-vector-icons/Ionicons';

import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import Dot from '../components/Dot';

const SlidesScreen = () => {
  const {width} = Dimensions.get('window');

  const translateX = useSharedValue(0);

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {slideItems.map((slide, index) => (
          <FlatListSlidesItems key={index.toString()} slideItem={slide} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={{...styles.fillCenter, flexDirection: 'row'}}>
          {slideItems.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                index={index}
                activeDotIndex={activeIndex}
              />
            );
          })}
        </View>
        <View style={styles.fillCenter}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                textTransform: 'uppercase',
                fontWeight: '500',
              }}>
              Entrar
            </Text>
            <Icon name="chevron-forward-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 50,
  },
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SlidesScreen;
