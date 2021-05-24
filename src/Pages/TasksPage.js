import React, { useEffect } from 'react';
import { Box } from 'theme-ui';
import Header from '../Components/Header';
import TaskCards from '../Components/TaskCards';
import Search from '../Components/Search';
import DoneTaskCounter from '../Components/DoneTaskCounter';
import { useRecoilState, useRecoilValue  } from 'recoil';
import { fetchData } from '../Utilities';
import { todoListState, loggedUserState } from '../RecoilState';

const TasksPage = () => {
  const [task, setTask] = useRecoilState(todoListState);
  const user = useRecoilValue(loggedUserState);

  useEffect(() => {
    const abortController = new AbortController();
    const abort = { signal: abortController.signal }
    fetchData(user.data?.id, setTask, abort);

     return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <DoneTaskCounter />
      <Box ml="5" mt="4" mb="4" mr="5">
        <Search />
        <Box mt="5">
          <TaskCards />
        </Box>
      </Box>

    </>
  );
};

export default TasksPage;
