import { FC } from 'react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './NutritionalPlanCard.styles';
import { Link } from 'react-router-dom';

const NutritionalPlanCard: FC = () => {
  const { classes } = useStyles();

  return (
    <Box component="article" className={classes.card}>
      <Box component="header" py="sm" px="lg">
        <Title order={6}>Mi Plan Nutricional</Title>
      </Box>
      <Box component="main" py="sm" px="lg" className={classes.main}>
        <Badge color="indigo" className={classes.badge}>
          Activo
        </Badge>
        <Group>
          <Avatar
            size={100}
            radius="xs"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          >
            LF
          </Avatar>
          <Stack spacing={3}>
            <Title order={6}>Gregory House</Title>
            <Text color="dimmed" size="sm">
              Diagnosta nutricional
            </Text>
            <Text size="sm">
              Soy un nutriólogo especializado en nutrición vegana
            </Text>
            <Group>
              <Text size="sm">Contacto:</Text>
              <ActionIcon variant="light" color="indigo">
                <FontAwesomeIcon icon={faPhone} />
              </ActionIcon>
              <ActionIcon variant="light" color="indigo">
                <FontAwesomeIcon icon={faEnvelope} />
              </ActionIcon>
            </Group>
          </Stack>
        </Group>
      </Box>
      <Box component="footer" py="sm" px="lg" className={classes.footer}>
        <Group position="center">
          <Button to="nueva-cita" size="xs" color="gray" component={Link}>
            Nueva Cita
          </Button>
          <Button
            to="programa-nutricional"
            size="xs"
            variant="outline"
            color="gray"
            component={Link}
          >
            Ver Programa
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default NutritionalPlanCard;
