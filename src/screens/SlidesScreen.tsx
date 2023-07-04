import React, {FunctionComponent, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';

import {slideItems} from '../data/slidesItems';
import FlatListSlidesItems from '../components/FlatListSlidesItems';

import Icon from 'react-native-vector-icons/Ionicons';

const SlidesScreen = () => {
  const {width} = Dimensions.get('window');
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {/* Contenido */}
      <Animated.FlatList
        data={slideItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <FlatListSlidesItems slideItem={item} />}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animatedValue}}}],
          {useNativeDriver: false},
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Footer  */}
      <View style={styles.footer}>
        {/* Pagination */}
        <View style={{...styles.fillCenter, flexDirection: 'row'}}>
          <FlatList
            horizontal
            data={slideItems}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({index}) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const colorOutputRange = ['white', 'black', 'white'];
              const scaleOutputRange = [1, 2, 1];
              const donScale = animatedValue.interpolate({
                inputRange,
                outputRange: scaleOutputRange,
                extrapolate: 'clamp',
              });
              const color = animatedValue.interpolate({
                inputRange,
                outputRange: colorOutputRange,
                extrapolate: 'clamp',
              });

              return (
                <View style={styles.dotContainer}>
                  <Dot scale={donScale} color={color} />
                </View>
              );
            }}
          />
        </View>

        {/* next Bottom  */}
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

interface dotProps {
  scale: Animated.AnimatedInterpolation<string | number>;
  color: Animated.AnimatedInterpolation<string | number>;
}

const Dot = ({scale, color}: dotProps) => {
  return (
    <Animated.View
      style={[styles.dot, {backgroundColor: color, transform: [{scale}]}]}
    />
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
  dotContainer: {
    marginLeft: 10,
    width: 40,
    padding: 10,
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
export default SlidesScreen;
