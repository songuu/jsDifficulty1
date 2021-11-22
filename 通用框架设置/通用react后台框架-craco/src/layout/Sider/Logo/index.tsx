import React from 'react';

// @ts-ignore
import style from './index.module.less';

interface IProps {
  isLaigu: boolean;
}

const Logo: React.FC<IProps> = ({ isLaigu }) => {
  return <div className={`${style.logo} ${isLaigu ? style.other : ''}`} />;
};

export default Logo;
