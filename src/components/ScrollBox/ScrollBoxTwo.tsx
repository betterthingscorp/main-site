import { ScrollArea, Title, Text, Group, SimpleGrid, Stack, Button, Center, Container, Paper, rem, Space } from '@mantine/core';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function ScrollBox2(){
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
            <Paper ref={targetRef} style={{backgroundColor: 'black'}} h={"80vh"}>
                <Group h={"100%"} position="center">
                    <SimpleGrid  style={{paddingRight: '8vw'}} cols={2} spacing="xl">
                        <Group position="center">
                            <Title color='white' order={1}>About Us</Title>
                        </Group>
                        <Group position="center">
                            <Title color='white' order={1}>
                                Our goal is to accelerate the discovery, development, and distribution of revolutionary technologies that improve the human condition.
                            </Title>
                            <Title color='white' order={1}>
                                We invest across the entirety of technology.
                            </Title>
                            <Space w={'xl'}/>
                        </Group>
                    </SimpleGrid>
                </Group>
            </Paper>
        </motion.div>
        </>
    );
}