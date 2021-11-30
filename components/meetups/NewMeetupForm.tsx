import { FC, useState } from 'react';
import Card from '../widgets/Card';
import classes from './NewMeetupForm.module.css';

type MeetupData = {
  title: string;
  image: string;
  address: string;
  description: string;
};
type Props = { onAddMeetup: (data: MeetupData) => void };

const defaultMeetup = { title: '', image: '', address: '', description: '' };

const NewMeetupForm: FC<Props> = (props: Props) => {
  const [meetupData, setMeetupData] = useState(defaultMeetup);
  const handleInput = ({ target }: { target: any }) => {
    setMeetupData({ ...meetupData, [target.id]: target.value });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' onChange={handleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' onChange={handleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' onChange={handleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows={5} onChange={handleInput}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
