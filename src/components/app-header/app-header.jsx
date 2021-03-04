import React from 'react';
import styles from './app-header.module.scss';
import ThemeSwitch from '../theme-switch/theme-switch.component';

const AppHeader = (
  <div position="static">
    <div className={styles.header}>
      <span>React Starter</span>
      <ThemeSwitch />
    </div>
  </div>
);

export default AppHeader;
