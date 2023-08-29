import { ScrollArea, Title, Text, Group, SimpleGrid, Stack, Button, Center, Container, Paper, rem, Space } from '@mantine/core';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import ScrollBox1 from './ScrollBox/ScrollBoxOne';
import ScrollBox2 from './ScrollBox/ScrollBoxTwo';
import ScrollBox3 from './ScrollBox/ScrollBoxThree';
import ScrollBox4 from './ScrollBox/ScrollBoxFour';
import ScrollBox5 from './ScrollBox/ScrollBoxFive';

function ScrollToAbout(){
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return(
    <Button onClick={()=>{scrollIntoView()}}>Scroll into</Button>
    
  );
}

function ScrollSpacer(){
    return(
        <Paper style={{backgroundColor: 'black'}} h={"40vh"}>
            <Group h={"100%"} position='center'>
            </Group>
        </Paper>
    );
}

export default function ScrollComponent() {
    const [showMoreClicked, setShowMoreClicked] = useState(false)
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <ScrollArea ref={scrollableRef} w={"90%"} style={{backgroundColor: 'black'}} h={"75vh"} type="never">
        
        <ScrollBox1/>

        <ScrollSpacer/>

        <ScrollBox2/>

        <ScrollSpacer/>

        <ScrollBox3/>

        <ScrollSpacer/>

        <ScrollBox4/>

        <ScrollBox5/>

        <ScrollSpacer/>

        
</ScrollArea>
  );
}