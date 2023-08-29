import { ScrollArea, Title, Text, Group, SimpleGrid, Stack, Button, Center, Container, Paper, rem, Space } from '@mantine/core';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function ScrollBox5(){
    const [showMoreClicked, setShowMoreClicked] = useState(false)
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();
    const control = useAnimation()
    const [ref, inView] = useInView()
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } 
        else {
            control.start("hidden");
        }
    }, [control, inView])

    return(
        <>
            <motion.div 
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box"
            >
                <Paper style={{backgroundColor: 'black'}} h={"80vh"}>
                    <Group h={"100%"} position='center'>
                        <Button variant='text'><Title color='white' order={3}><a style={{textDecoration: 'none', color: 'white'}} href='mailto:info@betterthings.com' target="_blank" rel="noopener noreferrer">Contact</a></Title></Button>
                        <Button variant='text'><Title color='white' order={3}><a style={{textDecoration: 'none', color: 'white'}} href='/careers' target="_blank" rel="noopener noreferrer">Careers</a></Title></Button>
                        <Button variant='text'><Title color='white' order={3}><a style={{textDecoration: 'none', color: 'white'}} href='https://twitter.com/betterthings' target="_blank" rel="noopener noreferrer">Twitter</a></Title></Button>
                        <Button variant='text'><Title color='white' order={3}><a style={{textDecoration: 'none', color: 'white'}} href='https://linkedin.com/betterthings' target="_blank" rel="noopener noreferrer">Linkedin</a></Title></Button>
                    </Group>
                    <Space h={'xl'}/>
                    <Group position='center'>
                        <Title color='white' order={6}>© 2023 Better Things</Title>
                    </Group>                
                </Paper>
            </motion.div>
        </>
    );
}