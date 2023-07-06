import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';

const ThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);

  const setTheme = () => {
    currentTheme === 'dark' ? setLightTheme() : setDarkTheme();
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={setTheme}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Ligth / Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeScreen;
