import {ImageSourcePropType} from 'react-native';

export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface SlideItem {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
