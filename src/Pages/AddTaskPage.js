import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'theme-ui';
import { alertTrigger } from '../Utilities';
import AddForm from '../Components/AddForm';
import Header from '../Components/Header';

const AddTaskPage = () => {
  const history = useHistory();
  const [dataStatus, setDataStatus] = useState();

  alertTrigger(dataStatus, history);

  return (
    <>
      <Header />
      <Button type="button" onClick={() => history.push('/Tasks')} sx={{ margin: 5}}>back</Button>
      <AddForm postMethod="Add task" />
    </>
  );
};

export default AddTaskPage;
