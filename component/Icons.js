import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';

const Icons = ({icon}) => (
  <IconButton
    icon={icon}
    iconColor={'black'}
    size={30}
    
    // onPress={() => console.log('Pressed')}
  />
);

export default Icons;