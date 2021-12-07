import { GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import React from 'react';
import MeetupDetail from './MeetupDetail';

const def = {
  id: 'm1',
  title: 'A first meetup',
  image:
    'https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
  description: 'This is a first meetup',
  address: 'Some Address 5, 12345 some city',
};

const MeetupDetails = () => {
  return <MeetupDetail {...def} />;
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context: { params: NextParsedUrlQuery } & any) => {
  const {
    params: { meetupId },
  } = context;
  return {
    props: { meetup: { ...def, id: meetupId } },
    revalidate: 5,
  };
};

export default MeetupDetails;
