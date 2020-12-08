import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import View from './View';

interface IExploreProps {
}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
  return (    
    <View style={styles.container}>
      <Text>(Explore Screen)</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;

