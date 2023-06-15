import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TWNNutritionist } from '@wn/shared';
import { Avatar, Button, Group, Stack, Text, Title } from '@mantine/core';
import { useStyles } from './NutritionistProfileCard.styles';

interface NutritionistCardProps {
  nutritionist: TWNNutritionist;
}

const NutritionistProfileCard: FC<NutritionistCardProps> = ({
  nutritionist,
}) => {
  const { classes } = useStyles({ banner: nutritionist.banner });

  const path = nutritionist.name.toLowerCase().split(' ').join('-');

  return (
    <article className={classes.card}>
      <div className={classes.infoWrapper}>
        <header className={classes.header} />
        <div className={classes.avatarWrapper}>
          <Avatar
            to={path}
            component={Link}
            radius={50}
            color="green"
            className={classes.avatar}
            src={
              nutritionist.pictureUrl.includes('PlaceHolder')
                ? null
                : nutritionist.pictureUrl
            }
          >
            {`${nutritionist.name[0]}${nutritionist.lastName[0]}`}
          </Avatar>
        </div>
        <main className={classes.main}>
          <Stack spacing={4}>
            <Title order={6}>{nutritionist.name}</Title>
            <Text size="sm" color="dimmed">
              Profesional de la salud
            </Text>
          </Stack>
        </main>
        <footer className={classes.footer}>
          <Group position="center" spacing="md" py="md">
            <Button color="green" size="xs">
              Conectar
            </Button>
            <Button
              to={path}
              component={Link}
              size="xs"
              color="green"
              variant="outline"
            >
              Ver mas
            </Button>
          </Group>
        </footer>
      </div>
    </article>
  );
};

export default NutritionistProfileCard;
