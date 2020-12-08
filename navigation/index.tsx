import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import BottomTabBar from './BottomTabNavigator';
import { navTheme } from '../styles/theme';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const theme = navTheme(colorScheme);
  return (
    <NavigationContainer theme={theme}>
      <BottomTabBar />
    </NavigationContainer>
  );
}
