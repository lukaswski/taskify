import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  Card, Grid, Box, Button, Text,
} from 'theme-ui';
import { useHistory } from 'react-router-dom';
import { searchedListState } from '../RecoilState';

const SingleTask = () => {
  const history = useHistory();
  const serchedTasks = useRecoilValue(searchedListState);

  return (
    <>
      {serchedTasks.length !== 0
        ? (
          <Grid width={[128, 292]} gap={3}>

            {serchedTasks.map(({ id, title, completed }) => (completed !== true
              && (
              <Card
                mt="3"
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 356,
                  bg: 'five',
                  borderRadius: '20px',
                  padding: '20px',
                }}
              >
                <Box m="2">
                  task
                  {id}
                </Box>
                <Box
                  m="2"
                  sx={{
                    bg: 'white', width: '100%', minHeight: '50px', textAlign: 'center', padding: '10px', borderRadius: ' 20px',
                  }}
                >
                  <Text variant="subtext">
                    {title}
                  </Text>
                </Box>
                <Button mt="2" type="button" onClick={() => history.push(`task-${id}`)}>open task</Button>
              </Card>
              )
            )).reverse()}
          </Grid>
        ) : (
          <Box>
            <Text variant="subtext">
              add some tasks
            </Text>
          </Box>
        )}
    </>
  );
};

export default SingleTask;
