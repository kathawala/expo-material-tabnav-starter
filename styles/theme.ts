import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      backgroundAccent: string;
    }
  }
}

// mostly pulled from: https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
export function combineThemes(themeType: ColorSchemeName): ReactNativePaper.Theme | Theme {
  const CombinedDefaultTheme: ReactNativePaper.Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      backgroundAccent: PaperDefaultTheme.colors.background
    },
  };
  const CombinedDarkTheme: ReactNativePaper.Theme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    mode: 'adaptive',
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      backgroundAccent: '#222222'
    },
  };

  return themeType === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
}
