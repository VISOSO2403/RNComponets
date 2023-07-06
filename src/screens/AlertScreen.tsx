import React, {useContext} from 'react';
import {View, Text, Button, Alert} from 'react-native';

import prompt from 'react-native-prompt-android';

import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el cuerpo de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      //   No es recomendable mandarle los argumentos, porque se debe obligar al usuario a presionar
      //   un boton de las opciones
      {
        cancelable: true,
        onDismiss: () => console.log('OnDismiss'),
      },
    );
  };

  const showPromp = () => {
    // Solo es funcional en Ios
    // Alert.prompt(
    //   'Esta seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'plain-text',
    //   'Hola mundo',
    // );

    // Esta opcion funciona para ambos dispotsitivos pero es un paquete de terceros
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button
        title="Mostrar Alerta"
        onPress={showAlert}
        color={colors.primary}
      />

      <View style={{marginTop: 10}} />

      {/* Esta funcion solo esta disponible en Ios */}
      <Button
        title="Mostrar Promp"
        onPress={showPromp}
        color={colors.primary}
      />
    </View>
  );
};

export default AlertScreen;
