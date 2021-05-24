import React from 'react';
import { Box, Text } from 'theme-ui';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../RecoilState';

const DoneTaskCounter = () => {
  const state = useRecoilValue(todoListState);
  const numberOfTasks = (bol) => state.filter(({ completed }) => completed === bol).length;
  const numberOfAllTasks = () => state.length;
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', color: 'dark' }}>
        <Box>
          <Text>
            your tasks
            {' '}
            {numberOfTasks(true)}
            /
            {numberOfAllTasks()}
          </Text>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', color: 'dark' }}>
        <Text variant="subtext" >
          to do:
          {' '}
          {numberOfTasks(false)}
        </Text>
      </Box>
    </>
  );
};

export default DoneTaskCounter;
