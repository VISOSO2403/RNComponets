import {View, Text, Switch, Platform} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
