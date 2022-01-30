import React, {useEffect} from 'react';
import {BookContext} from '../../../contexts';
import DebitCard from './DebitCard';

const WorldPage = ({navigation, route}) => {
  useEffect(() => {}, []);

  return (
    <BookContext.Provider value={{navigation, route}}>
      <DebitCard />
    </BookContext.Provider>
  );
};

export default WorldPage;
