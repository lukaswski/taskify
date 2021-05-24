import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Button, Box, Image } from 'theme-ui';
import Login from '../Components/Login';
import { loggedUserState } from '../RecoilState';
import Logo from '../img/Logo.png';

const Home = () => {
  const history = useHistory();
  const user = useRecoilValue(loggedUserState);
  const handleButtons = (slug) => history.push(`/${slug}`);
  return (
    <>
      <Box sx={{
       margin: '0 auto', width: '100%', textAlign: 'center',
      }}
      >
        <Image variant="titleLogo" src={Logo} />
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
      {user.name?.length > 0 ? 
        <Box>
          <Button m="2" type="button" onClick={() => handleButtons('AddTask')}>
            add new task
          </Button>
          <Button type="button" onClick={() => handleButtons('Tasks')}>check your list</Button>
        </Box> : <Login />}
      </Box>
    </>
  );
};

export default Home;
