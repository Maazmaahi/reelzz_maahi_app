import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mergedStack} from './ScreenCollection';
import { RoutesName } from '../constants/RoutesName';

const Stack = createNativeStackNavigator();

const MainNavigatior: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutesName.Splash}
      screenOptions={() => ({headerShown: false})}>
      {mergedStack.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigatior;
