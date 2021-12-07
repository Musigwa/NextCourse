import React from 'react';
import NewMeetupForm, { MeetupData } from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const addMeetupHandler = (meetup: MeetupData) => {
    console.log('This should be a new meetup==>', meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
