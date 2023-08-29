import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, Card } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Greater transparency',
    description:
      'Investors can track their token ownership and access real-time information on fund performance and holdings.',
  },
  {
    icon: IconUser,
    title: 'Faster settlement times',
    description:
      'Tokenization speeds up trade settlements, enabling investors to receive their funds faster after selling their shares in the fund.',
  },
  {
    icon: IconCookie,
    title: 'Lower costs',
    description:
      'Tokenization reduces costs such as custody, transfer, and administration, resulting in lower fees for investors and increased returns for fund managers.',
  },
  {
    icon: IconLock,
    title: 'Global reach',
    description:
      'Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.',
  },
  {
    icon: IconMessage2,
    title: 'Increased accessibility',
    description:
      'Tokenization broadens investment opportunities, including retail investors previously excluded from traditional investment structures.',
  },
  {
    icon: IconMessage2,
    title: 'Programable terms',
    description:
      'Program the transfer-restrictions and investment terms that are required between different asset and investor (KYC) classifications.'
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card style={{backgroundColor: '#272727'}} shadow="xl" radius="sm" withBorder>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        <a style={{color: 'white'}}>{title}</a>
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </Card>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

export function FeaturesCard() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}