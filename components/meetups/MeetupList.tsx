import Link from 'next/link';
import { FC } from 'react';
import { pathNames } from '../../constants';
import MeetupItem, { Meetup } from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList: FC<{ meetups: Meetup[] }> = ({ meetups }: { meetups: Meetup[] }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id: meetupId, ...meetup }) => (
        <Link
          key={meetupId}
          href={{ pathname: pathNames.MEETUP_DETAILS, query: { meetupId } }}
          passHref={true}
        >
          <MeetupItem id={meetupId} {...meetup} />
        </Link>
      ))}
    </ul>
  );
};

export default MeetupList;
