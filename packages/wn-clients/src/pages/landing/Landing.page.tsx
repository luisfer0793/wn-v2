import { Container, Text, Title } from '@mantine/core';
import { useStyles } from './Landing.styles';

const LandingPage = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl" className={classes.container}>
      <Title align="center" className={classes.title}>
        Landing Page
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        assumenda blanditiis commodi consequatur delectus doloremque eligendi id
        impedit incidunt itaque labore, maiores officiis quo quos, saepe tempore
        tenetur vero. Autem commodi dolore ducimus eius eligendi id magnam,
        maxime neque nobis perspiciatis provident repellat soluta, ullam ut
        velit vitae, voluptas! Qui?
      </Text>
    </Container>
  );
};

export default LandingPage;
