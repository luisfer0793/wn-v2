import {
  faDesktop,
  faChartBar,
  faCalendarCheck,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const LINKS = {
  COMMON: [
    {
      icon: faDesktop,
      label: 'Dashboard',
      component: Link,
      to: 'cliente/dashboard',
    },
    {
      icon: faChartBar,
      label: 'Mi progreso',
      component: Link,
      to: 'cliente/progreso',
    },
    {
      icon: faCalendarCheck,
      label: 'Agenda un análisis',
      component: Link,
      to: 'cliente/agenda-un-analisis',
    },
  ],
  HEALTH_PROFESSIONALS: [
    {
      icon: faUserDoctor,
      label: 'Nutriólogos',
      component: Link,
      to: 'cliente/nutriologos',
    },
  ],
};
