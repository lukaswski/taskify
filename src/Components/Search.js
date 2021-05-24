import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Flex, Box, Input, Button,
} from 'theme-ui';
import { todoListState, searchedListState } from '../RecoilState';

const Search = () => {
  const history = useHistory();
  const tasks = useRecoilValue(todoListState);
  const [, setSerchedTask] = useRecoilState(searchedListState);

  const handleInput = (e) => (
    setSerchedTask(tasks.filter(({ title }) => title.toLowerCase().includes(e.target.value)))
  );
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Box p={2}>
        <Input name="search" id="search" placeholder="search task" onChange={handleInput} />
      </Box>
      <Box p={2}>
        <Button onClick={() => history.push('/AddTask')}>add new</Button>
      </Box>
    </Flex>
  );
};

export default Search;
