import * as React from 'react';
import { View as RNView, ViewProps } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import { combineThemes } from '../styles/theme';

const View: React.FunctionComponent<ViewProps> = (props) => {
  const colorScheme = useColorScheme();
  const { colors } = combineThemes(colorScheme);
  return (
    <RNView {...props} style={[props.style, { backgroundColor: colors.background }]}></RNView>
  );
};


export default View;
