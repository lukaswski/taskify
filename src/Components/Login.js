import React, { useState, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box, Button, Input, Label, Alert,
} from 'theme-ui';
import { useRecoilState } from 'recoil';
import { postData, alertTrigger, usersEndpoint } from '../Utilities';
import { loggedUserState } from '../RecoilState';

const Login = () => {
  const history = useHistory();
  const [collapse, setCollapse] = useState(false);
  const [userInApp, setUserInApp] = useRecoilState(loggedUserState);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NAME':
        return { ...state, name: action.payload };
      case 'ADD_EMAIL':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  const [newUserState, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    gender: 'Male',
    status: 'Active',
  });
  useEffect(() => {
    userInApp.code === 201 && alertTrigger(true, history);
  }, [userInApp]);

  const handleSubmitButton = () => (
    newUserState.name.length === 0 && alert('complete name'),
    postData(newUserState, setUserInApp, usersEndpoint)
  );
  const handleRegister = () => setCollapse(!collapse);

  return (
    <>
      <Box sx={{ }}>
        <Button onClick={() => handleRegister()}>Welcome</Button>
      </Box>
      {collapse && (
      <Box>
        <Box>
          {userInApp.code === 422 && (
          <Alert m={3}>
            email
            {' '}
            {userInApp.data[0].message}
          </Alert>
          )}
          <Label htmlFor="password">name</Label>
          <Input
            mb={3}
            onChange={(e) => dispatch({ type: 'ADD_NAME', payload: e.target.value })}
          />
          <Label htmlFor="password">email</Label>
          <Input
            mb={3}
            onChange={(e) => dispatch({ type: 'ADD_EMAIL', payload: e.target.value })}
          />

          <Button mb="5" type="submit" onClick={handleSubmitButton}>Register</Button>
        </Box>
      </Box>
      )}
    </>
  );
};

export default Login;
