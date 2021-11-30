import React, { FC } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout: FC = props => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
