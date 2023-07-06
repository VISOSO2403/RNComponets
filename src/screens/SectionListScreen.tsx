import {View, Text, SectionList} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import ItemSeparetor from '../components/ItemSeparetor';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const SectionListScreen = () => {
  const casas: Casas[] = [
    {
      casa: 'DC Comics',
      data: [
        'Batman',
        'Superman',
        'Robin',
        'Flash',
        'Gatubela',
        'Linterna Verde',
      ],
    },
    {
      casa: 'Marvel Comics',
      data: [
        'Antman',
        'Thor',
        'Spiderman',
        'IroMan',
        'Capitan America',
        'Black Widow',
      ],
    },
    {
      casa: 'Anime',
      data: [
        'Kenshin',
        'Goku',
        'Saitama',
        'Naruto',
        'Sasuke',
        'Vegeta',
        'Bills',
      ],
    },
  ];

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de casas: ' + casas.length} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        SectionSeparatorComponent={() => <ItemSeparetor />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
