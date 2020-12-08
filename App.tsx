import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import useColorScheme from './hooks/useColorScheme';
import { combineThemes } from './styles/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = combineThemes(colorScheme);
  return (
    <PaperProvider theme={theme as ReactNativePaper.Theme}>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
