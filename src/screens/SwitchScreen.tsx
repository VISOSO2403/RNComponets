import React, {useContext, useState} from 'react';
import {View, Text, Switch, Platform, StyleSheet} from 'react-native';

import {ThemeContext} from '../context/theme/ThemeContext';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {styles} from '../theme/appTheme';

const SwitchScreen = () => {
  const [first, setFirst] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = first;

  const onChange = (value: boolean, field: string) => {
    setFirst({
      ...first,
      [field]: value,
    });
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(first, null, 5)}
      </Text>
    </View>
  );
};

export default SwitchScreen;
