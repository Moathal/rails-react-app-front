import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGreetings } from '../redux/Message/message';

const Greetings = () => {
  const { greetings, loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showGreetings());
    /* eslint-disable */
  }, []);
  return (
    <h1>{loading ? 'Loading...' : greetings.greeting}</h1>
  );
};

export default Greetings;
