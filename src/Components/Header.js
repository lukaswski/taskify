import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Box, Image } from 'theme-ui';
import LogoTriangle from '../img/LogoTriangle.png';

const Header = () => {
  const history = useHistory();

  return (
    <Flex>
      <Box p={4} sx={{ width: '100%' }}>
        <Box sx={{ width: '100px' }} onClick={() => history.push('/Tasks')}>
          <Image variant="logo" src={LogoTriangle} sx={{ width: '50%' }} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
