import { NavigationContainer, Theme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import BottomTabBar from './BottomTabNavigator';
import { combineThemes } from '../styles/theme';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const theme = combineThemes(colorScheme);
  return (
    <NavigationContainer theme={theme as Theme}>
      <BottomTabBar />
    </NavigationContainer>
  );
}
