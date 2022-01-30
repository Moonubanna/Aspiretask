import React, {useEffect} from 'react';
import {BookContext} from '../../../contexts';
import WeeklyLimit from './WeeklyLimit';

const WorldPage = ({navigation, route}) => {
  useEffect(() => {}, []);

  return (
    <BookContext.Provider value={{navigation, route}}>
      <WeeklyLimit />
    </BookContext.Provider>
  );
};

export default WorldPage;
