import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import View from './components/View';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { Provider as PaperProvider, Text, ThemeProvider } from 'react-native-paper';
import useColorScheme from './hooks/useColorScheme';
import { combineThemes } from './styles/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = combineThemes(colorScheme);
  return (
    <PaperProvider theme={theme}>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
