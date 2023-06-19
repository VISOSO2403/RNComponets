import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

const InputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        {/* En caso de que no se aplique el cierre del teclado, se usa el TouchableWithoutFeedbak */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Input" />

            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              keyboardAppearance="dark" //Solo disponible en ios
            />

            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su gmail"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Suscribirme</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su telefono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="number-pad"
            />

            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese una contraseña"
              onChangeText={value => onChange(value, 'password')}
              secureTextEntry
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={{marginVertical: 50}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const stylesScreen = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default InputScreen;
