import './App.css';
import { rem, createStyles, MantineProvider, Image, Button, Group, Text , Paper, Center} from '@mantine/core';
import ScrollComponent from './components/ScrollComponent';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Box } from '@mantine/core';


function App() {
  const [visible, { toggle }] = useDisclosure(false);

  // useEffect(() => {
  //   toggle()
  // });
  
  return (
    <MantineProvider theme={{fontFamily: 'Quicksand'}}  withGlobalStyles withNormalizeCSS>
        <LoadingOverlay visible={visible} overlayBlur={2} />
      <Paper 
      style={{backgroundColor: '#272727'}}
       h="100vh">
      <Group 
      // style={{marginTop: "1vh"}}
      style={{padding: '2%'}}
       position="apart">
        <Image maw={32} src={'https://i.ibb.co/VQ5kGhT/Better-Things-Logo-white.png'} />
        <Button variant="text"><a style={{color: 'white'}}>About</a></Button>
      </Group>

      <Center color='dark'>
        <ScrollComponent/>

      </Center>
      
      <Group position="apart"
      style={{padding: '1.5%'}}
      >
        <Button variant="text"><a style={{color: 'white'}}>Portfolio</a></Button>
        <Button variant="text"><a style={{color: 'white'}}>Team</a></Button>
      </Group>

      </Paper>
      
    </MantineProvider>
  );
}

export default App;
