import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
  placeholderColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(0.0.0.0.5)',
  colors: {
    primary: '#BE79DF', //color de botones
    background: '#CFF1EF', //color del fondo
    card: '#A5BECC',
    text: 'black', //color del texto
    border: '#243A73',
    notification: '#A5BECC',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(255,255,255,0.5)',
  colors: {
    primary: '#176B87',
    background: '#001C30',
    card: '#9356A0',
    text: 'white',
    border: '#2C1B47',
    notification: '#A27B5C',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
