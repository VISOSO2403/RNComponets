import {View, Text, Button, Modal} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />

      <Button
        title="Abrir Modal"
        onPress={() => setIsVisible(true)}
        color={colors.primary}
      />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background negro transparente */}
        <View
          style={{
            flex: 1,
            backgroundColor: dividerColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido del modal */}
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <HeaderTitle title="Modal" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginBottom: 20,
                color: colors.text,
              }}>
              Cuerpo del modal
            </Text>
            <Button
              title="Cerrar"
              onPress={() => setIsVisible(false)}
              color={colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
