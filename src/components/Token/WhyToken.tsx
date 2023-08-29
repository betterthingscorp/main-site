import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 550,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    backgroundColor: '#272727',
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function WhyToken() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
      <a style={{color: 'white'}}>Why Tokenize?</a>
      </Title>

      <Accordion  variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control><a style={{color: 'white'}}>What is tokenization?</a></Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control><a style={{color: 'white'}}>What are the benefits of tokenizing assets?</a></Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control><a style={{color: 'white'}}>How can I subscribe to monthly newsletter?</a></Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control><a style={{color: 'white'}}>Do you store credit card information securely?</a></Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control><a style={{color: 'white'}}>What payment systems to you work with?</a></Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}