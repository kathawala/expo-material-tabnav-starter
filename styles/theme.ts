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

// mostly pulled from: https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
export function combineThemes(themeType: ColorSchemeName): ReactNativePaper.Theme {
  const CombinedDefaultTheme: ReactNativePaper.Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };
  const CombinedDarkTheme: ReactNativePaper.Theme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    mode: 'adaptive',
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  return themeType === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
}

// we have to do this because when feeding the theme into the NavigationContainer
// the theme has to type check as being a Theme from React Navigation
export function navTheme(themeType: ColorSchemeName): Theme {
  const CombinedDefaultTheme: Theme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };
  const CombinedDarkTheme: Theme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
    },
  };

  return themeType === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
}
