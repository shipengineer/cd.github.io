import React from 'react';
import styles from './Layout.module.css';
import Warp from './Warp';
const Layout = (props) => {
  return (
    <div
      style={{ backgroundImage: props.substrate }}
      className={`${styles.substrate} ${props.className}`}
    >
      <Warp />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
