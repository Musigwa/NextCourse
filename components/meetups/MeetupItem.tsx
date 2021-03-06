import React, { FC } from 'react';
import Card from '../widgets/Card';
import classes from './MeetupItem.module.css';

export type Meetup = { id: string; title: string; image: string; address: string };

const MeetupItem: FC<Meetup> = ({ title, address, image }: Meetup) => {
  const showDetails = () => {};

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
