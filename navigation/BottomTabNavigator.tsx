import * as React from 'react';
import { TextStyle } from 'react-native';
// import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {TabsConfig, FlashyTabBarItemConfig, FlashyTabBarIconProps} from '@gorhom/animated-tabbar';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Explore from '../components/Explore';
import Messages from '../components/Messages';

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {

  const { colors } = useTheme();

  const labelFontStyle: TextStyle = {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text
  };

  const tabs: TabsConfig<FlashyTabBarItemConfig> = {
    Home: {
      labelStyle: labelFontStyle,
      icon: {
        component: (props) =>
          <MaterialCommunityIcons
            name="home"
            color={colors.primary}
            size={22}
          />
        ,
        color: colors.primary
      },
      indicator: {}
    },
    Messages: {
      labelStyle: labelFontStyle,
      icon: {
        component: (props) =>
          <MaterialIcons
            name="mail"
            color={colors.primary}
            size={22}
          />
        ,
        color: colors.primary
      },
      indicator: {}
    },
    Explore: {
      labelStyle: labelFontStyle,
      icon: {
        component: (props) =>
          <MaterialCommunityIcons
            name="telescope"
            color={colors.primary}
            size={22}
          />
        ,
        color: colors.primary
      },
      indicator: {}
    },
    Profile: {
      labelStyle: labelFontStyle,
      icon: {
        component: (props) =>
          <MaterialCommunityIcons
            name="account"
            color={colors.primary}
            size={22}
          />
        ,
        color: colors.primary
      },
      indicator: {}
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => (
        <AnimatedTabBar {...props} itemContainerWidth='auto' style={{ backgroundColor: colors.backgroundAccent }} preset='flashy' tabs={tabs} />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}