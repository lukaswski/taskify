import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { loggedUserState, charsCounter } from '../RecoilState';
import {
  Label, Textarea, Box, Button, Alert, Close, Flex
} from 'theme-ui';
import { postData, patchData, alertTrigger, tasksUrlEndpoint } from '../Utilities';

const AddForm = ({ postMethod }) => {
  const history = useHistory();
  const { id } = useParams();
  const user = useRecoilValue(loggedUserState);
  const [dataStatus, setDataStatus] = useState();
  const [chars, setChars] = useRecoilState(charsCounter);
  const [sendData, setSendData] = useState({
    user: user.name, title: '', user_id: user.id, completed: 'false',
  });

  alertTrigger(dataStatus, history);
  const handleTextArea = (e) => (
    e.persist(),
    setSendData((prevState) => (
      {
        ...prevState,
        title: e.target.value,
      }
    )),
    setChars(e.target.value.length)
    );
  return (
    <>
      <Box as="form" onSubmit={(e) => e.preventDefault()} sx={{margin: '20px 10%'}}>
      {dataStatus?.code == 201 &&    
      <Alert mt="2" mb="5" >
        new task onboard!: "{dataStatus.data.title}"
        <Close ml="auto" mr={-2} /> 
      </Alert> }
        <Flex>
          <Label>{postMethod}</Label>
          <Box>{chars}/300</Box>
        </Flex>
        <Textarea maxlength="300" name="comment" id="comment" rows={6} mb={3} onChange={handleTextArea} />
        {postMethod === 'Add task' ?
          <Button onClick={() => postData(sendData, setDataStatus, tasksUrlEndpoint(user?.data.id))}>Submit</Button> 
          :
          <Button onClick={() => patchData(sendData, setDataStatus, id.slice(5))}>Submit</Button>
        }
      </Box> 
    </>
  );
};

export default AddForm;
