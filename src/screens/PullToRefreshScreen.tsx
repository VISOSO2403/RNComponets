import React from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {
  //solucion para notch de Dispositivos
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Termino');
      setRefreshing(false);
      setData('Hola mundo');
    }, 2500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          //Solo disponibles en Android
          progressViewOffset={10} //Distancia entre el Top y el Refresh
          progressBackgroundColor="purple" //Cambia el color del fondo
          colors={['white', 'red', 'green']} // Cambia el color por etapas
          //Solo disponible en Ios
          style={{backgroundColor: 'blue'}}
          tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
