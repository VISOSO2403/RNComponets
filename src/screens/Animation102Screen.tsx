import React from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

const Animation102Screen = () => {
  return (
    <View style={ styles.container }>
      <View style={styles.purpleBox} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#75CEDB',
    width: 150,
    height: 150
  }
})

export default Animation102Screen