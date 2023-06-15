import { FC, useMemo, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDebouncedState } from '@mantine/hooks';
import {
  Alert,
  Autocomplete,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { NutritionistProfileCard } from 'components';
import { useGetNutritionistsService } from 'network/services';

import { useTypedSelector } from 'state/store';
import { nutritionistsDescriptionsSelector } from 'state/slices/nutritionists/nutritionists.selector';

import { SortTypes } from './Nutritionists.utils';
import { useStyles } from './Nutritionists.styles';

const NutritionistsPage: FC = () => {
  const [sortCriteria, setSortCriteria] = useState<SortTypes>(
    SortTypes.RAITING,
  );
  const [searchQuery, setSearchQuery] = useDebouncedState('', 500);

  const {
    data: nutritionists = [],
    isLoading,
    isError,
  } = useGetNutritionistsService();

  const autocompleteItems = useTypedSelector(nutritionistsDescriptionsSelector);

  const { classes } = useStyles();

  const sortedNutritionistList = useMemo(() => {
    if (sortCriteria === SortTypes.NAME) {
      return nutritionists
        .filter(({ name, lastName }) =>
          `${name.toLowerCase()} ${lastName.toLowerCase()}`.includes(
            searchQuery.toLowerCase(),
          ),
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return nutritionists.filter(({ name, lastName }) =>
      `${name.toLowerCase()} ${lastName.toLowerCase()}`.includes(
        searchQuery.toLowerCase(),
      ),
    );
  }, [sortCriteria, nutritionists, searchQuery]);

  if (isLoading) {
    return (
      <Container>
        <Center>
          <Loader />
        </Center>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Center>
          <Alert
            icon={<FontAwesomeIcon icon={faCircleExclamation} />}
            title="Upps!"
            color="red"
          >
            Algo salió mal, no pudimos cargar la información, intenta de nuevo
            más tarde.
          </Alert>
        </Center>
      </Container>
    );
  }

  return (
    <Container fluid py={24}>
      <Title order={1} align="center" pb={24}>
        Nutriólogos
      </Title>
      <Stack spacing="xl">
        <Stack spacing="sm">
          <Title order={5} align="center">
            ¿Estás buscando a tu nutriólogo ideal?
          </Title>
          <Text align="center">
            ¿No sabes por dónde iniciar? No te preocupes, nosotros te ayudamos
            en tu búsqueda
          </Text>
          <Group position="center">
            <Button color="lime">Toma el Wellnub test</Button>
            <Button color="lime" variant="light">
              No encuentras lo que búscas
            </Button>
          </Group>
        </Stack>
        <Autocomplete
          data={autocompleteItems}
          defaultValue={searchQuery}
          onChange={setSearchQuery}
          placeholder="Encuentra a tu nutriólogo por nombre o especialidad"
          nothingFound="No se encontraron coincidencias"
          icon={
            <ThemeIcon color="gray" variant="filled">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </ThemeIcon>
          }
        />
        <div className={classes.grid}>
          {sortedNutritionistList.map(nutritionist => (
            <NutritionistProfileCard
              key={nanoid()}
              nutritionist={nutritionist}
            />
          ))}
        </div>
      </Stack>
    </Container>
  );
};

export default NutritionistsPage;
