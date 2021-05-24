import React from 'react';
import { useRecoilValue } from 'recoil';
import { Text } from 'theme-ui';
import SingleTask from './SingleTask';
import { loggedUserState } from '../RecoilState';

const TaskCards = () => {
  const user = useRecoilValue(loggedUserState);
  return (
    <>
      <Text>
        Welcome
        {' '}
        {user.data?.name}
        !
      </Text>
      <SingleTask />
    </>
  );
};

export default TaskCards;
