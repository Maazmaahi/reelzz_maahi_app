import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigatior from './MainNavigatior';
import { navigationRef } from '../utils/NavigationUtil';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigatior />
    </NavigationContainer>
  );
};

export default Navigation;