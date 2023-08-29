import { ScrollArea, Title, Text, Group, SimpleGrid, Stack, Button, Center, Container, Paper, rem, Space } from '@mantine/core';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed, IconLoaderQuarter } from '@tabler/icons-react';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function ScrollBox3(){
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
                    <Group h={"100%"} position="center">
                        <SimpleGrid style={{paddingRight: '8vw'}} cols={2} spacing="xl">
                            <Group position="center">
                                <Title color='white' order={1}>Portfolio</Title>
                            </Group>
                            <Group position="center">
                                <Title color='white' order={1}>
                                    {!showMoreClicked? 
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <ThemeIcon color="success" size={24} radius="xl">
                                            <IconCircleCheck size="1rem" />
                                            </ThemeIcon>
                                        }
                                        >
                                        <List.Item><Title order={5} color='white'>Clone or download repository from GitHub</Title></List.Item>
                                        <List.Item><Title order={5} color='white'>Install dependencies with yarn</Title></List.Item>
                                        <List.Item><Title order={5} color='white'>To start development server run npm start command</Title></List.Item>
                                        <List.Item><Title order={5} color='white'>Run tests to make sure your changes do not break the build</Title></List.Item>
                                        <List.Item
                                            icon={
                                            <ThemeIcon color="green" size={24} radius="xl">
                                                <IconLoaderQuarter size="1rem" />
                                            </ThemeIcon>
                                            }
                                        >
                                            <Title order={5} color='white'>Submit a pull request once you are done</Title>  
                                        </List.Item>
                                    </List> 
                                    :
                                    <SimpleGrid cols={3}>
                                        <Group>
                                            <List
                                                spacing="xs"
                                                size="sm"
                                                center
                                                icon={
                                                    <ThemeIcon color="success" size={24} radius="xl">
                                                    <IconCircleCheck size="1rem" />
                                                    </ThemeIcon>
                                                }
                                                >
                                                <List.Item><Title order={5} color='white'>Clone or download repository from GitHub</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Install dependencies with yarn</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>To start development server run npm start command</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Run tests to make sure your changes do not break the build</Title></List.Item>
                                                <List.Item
                                                    icon={
                                                    <ThemeIcon color="green" size={24} radius="xl">
                                                        <IconLoaderQuarter size="1rem" />
                                                    </ThemeIcon>
                                                    }
                                                >
                                                    <Title order={5} color='white'>Submit a pull request once you are done</Title>  
                                                </List.Item>
                                            </List> 
                                        </Group>
                                        <Group>
                                        <List
                                                spacing="xs"
                                                size="sm"
                                                center
                                                icon={
                                                    <ThemeIcon color="success" size={24} radius="xl">
                                                    <IconCircleCheck size="1rem" />
                                                    </ThemeIcon>
                                                }
                                                >
                                                <List.Item><Title order={5} color='white'>Clone or download repository from GitHub</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Install dependencies with yarn</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>To start development server run npm start command</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Run tests to make sure your changes do not break the build</Title></List.Item>
                                                <List.Item
                                                    icon={
                                                    <ThemeIcon color="green" size={24} radius="xl">
                                                        <IconLoaderQuarter size="1rem" />
                                                    </ThemeIcon>
                                                    }
                                                >
                                                    <Title order={5} color='white'>Submit a pull request once you are done</Title>  
                                                </List.Item>
                                            </List> 
                                        </Group>
                                        <Group>
                                        <List
                                                spacing="xs"
                                                size="sm"
                                                center
                                                icon={
                                                    <ThemeIcon color="success" size={24} radius="xl">
                                                    <IconCircleCheck size="1rem" />
                                                    </ThemeIcon>
                                                }
                                                >
                                                <List.Item><Title order={5} color='white'>Clone or download repository from GitHub</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Install dependencies with yarn</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>To start development server run npm start command</Title></List.Item>
                                                <List.Item><Title order={5} color='white'>Run tests to make sure your changes do not break the build</Title></List.Item>
                                                <List.Item
                                                    icon={
                                                    <ThemeIcon color="green" size={24} radius="xl">
                                                        <IconLoaderQuarter size="1rem" />
                                                    </ThemeIcon>
                                                    }
                                                >
                                                    <Title order={5} color='white'>Submit a pull request once you are done</Title>  
                                                </List.Item>
                                            </List> 
                                        </Group>
                                    </SimpleGrid>
                                    }
                                        <Space h={'md'}/>
                                        <Button onClick={()=>{setShowMoreClicked(showMoreClicked => !showMoreClicked)}} variant="subtle" color="gray" radius="xl" size="xs" compact>
                                            Show More
                                        </Button>
                                </Title>
                            </Group>
                        </SimpleGrid>
                    </Group>
                </Paper>
            </motion.div>
        </>
    );
}