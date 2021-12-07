import React, { FC } from 'react';
import { Meetup } from '../../components/meetups/MeetupItem';
import MeetupList from '../../components/meetups/MeetupList';

const DUMMY = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    description: 'This is a first meetup',
    address: 'Some Address 5, 12345 some city',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    description: 'This is a first meetup',
    address: 'Some Address 6, 12345 some city',
  },
];

const Meetups: FC<{ meetups: Meetup[] }> = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = () => {
  // Fetch data from an API
  return {
    props: { meetups: DUMMY },
    revalidate: 1,
  };
};

// export const getServerSideProps = context => {
//   const req = context.req;
//   const res = context.res;
//   // Fetch data from the API
//   return {
//     props: { meetups: DUMMY },
//   };
// };

export default Meetups;
