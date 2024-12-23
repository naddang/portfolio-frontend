import React from 'react';
import DesignPage from './menu/DesignPage';
import BBS from './bbs/List';

const DynamicComponent = ({ menu }) => {
  console.log(menu);
  const components = {
    'D': DesignPage,
    'B': BBS,
    // 다른 컴포넌트를 여기에 추가
  };

  const Component = components[menu.type];

  return Component ? <Component /> : <div>{menu.name}</div>;
};

export default DynamicComponent;