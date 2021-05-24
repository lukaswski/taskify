import React, { useState } from 'react';
import { Box, Button, Message, Alert, Text, Flex} from 'theme-ui';
import { useRecoilValue } from 'recoil';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import AddForm from '../Components/AddForm';
import { searchedListState, loggedUserState } from '../RecoilState';
import { deleteData, alertTrigger, patchData } from '../Utilities';
import { dots } from '../img/icons';

const SingleTaskPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const tasks = useRecoilValue(searchedListState);
  const user = useRecoilValue(loggedUserState);
  const [collapseOptions, setCollapseOptions] = useState(false);
  const [collapseEditTask, setCollapseEditTask] = useState(false);
  const [alert, setAlert] = useState();

  const singleTask = (idTask) => tasks.find(({ id }) => id == idTask.slice(5));
  const handleBackToTasks = () => history.push('/Tasks')

  alertTrigger(alert, history);

  return (
    <>
      <Header />
      <Box sx={{margin: ['5%', '10%']}}>
        <Flex sx={{justifyContent: 'space-between', alignItems: 'stretch' }}>
          <Button mb="5" type="button" onClick={() => handleBackToTasks()}>back</Button>
          <Button sx={{width: '60px', height: '30px'}} onClick={() => setCollapseOptions(!collapseOptions)}>
            {dots}
          </Button>
        </Flex>
        {alert?.code == 204 && <Alert mb="3">
          <Text color="white">
            Task Deleted!
          </Text>
        </Alert>}
        <Message sx={{bg: 'five', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Box m='3'>
            <Text>
              {id}
            </Text>
          </Box>
          <Box m='3'>
          <Text variant="subtext">
            {singleTask(id)?.title}
          </Text>
          </Box>
          {singleTask(id)?.completed && <Box>task completed!</Box>}
        </Message>
        <Button 
          mb="5"
          variant="secondary" 
          type="button" 
          onClick={() => patchData({ user: user.data.name, completed: 'true' }, setAlert, id.slice(5))}
          >
          Task Done
        </Button>
        {collapseOptions && 
        <Box mt="5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button m="1" onClick={() => setCollapseEditTask(!collapseEditTask)}>Edit task</Button>
          <Button onClick={() => deleteData(id.slice(5),setAlert)}>Delete task</Button>
        </Box>
        }
        {collapseEditTask && 
        <Box mt="4">
            <AddForm postMethod={'Update'}/>
        </Box>}
      </Box>
      
    </>
  );
};

export default SingleTaskPage;
