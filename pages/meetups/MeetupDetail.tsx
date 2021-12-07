import React from 'react';
import { Meetup } from '../../components/meetups/MeetupItem';
import style from './MeetupDetail.module.css';
type MeetType = Meetup & { description: string };

const MeetupDetail = ({ image, title, description, address }: MeetType) => {
  return (
    <section className={style.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
