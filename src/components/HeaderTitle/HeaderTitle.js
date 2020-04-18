import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Text from '../Text';

const HeaderTitle = ({ className, children, ...props }) => (
  <Div className='header-title-wrapper'>
      <Text className={className} {...props}>{children}</Text>
  </Div>
);

export default HeaderTitle
