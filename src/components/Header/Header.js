import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Text from '../Text';

const Header = ({ className, children, ...props }) => (
  <Div className='header-wrapper'>
      <Text className={className} {...props}>{children}</Text>
  </Div>
);

export default Header
