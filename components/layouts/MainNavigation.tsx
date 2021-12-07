import Link from 'next/link';
import React, { FC } from 'react';
import { pathNames } from '../../constants';
import classes from './MainNavigation.module.css';

const MainNavigation: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href={{ pathname: pathNames.MEETUPS }}>All Meetups</Link>
          </li>
          <li>
            <Link href={{ pathname: pathNames.NEW_MEETUP }}>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
