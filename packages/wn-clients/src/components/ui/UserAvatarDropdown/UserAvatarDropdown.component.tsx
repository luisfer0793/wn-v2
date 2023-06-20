import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Menu } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { useTypedDispatch } from 'state/store';
import { setLogout } from 'state/slices/authentication/authentication.slice';
import { useStyles } from './UserAvatarDropdown.styles';

const UserAvatarDropdown: FC = () => {
  const dispatch = useTypedDispatch();

  const { classes } = useStyles();

  const onLogoutHandler = () => {
    dispatch(setLogout());
  };

  return (
    <Menu withArrow position="top-end" shadow="lg">
      <Menu.Target>
        {/* TODO: Conectar con perfil en estado redux */}
        <Avatar className={classes.menu} color="red" radius="xl" size="md">
          LF
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Configuración</Menu.Label>
        <Menu.Item
          component={Link}
          to="/dashboard"
          icon={
            <FontAwesomeIcon
              icon={faBriefcase}
              size="sm"
              className={classes.icon}
            />
          }
        >
          Mi perfil
        </Menu.Item>
        <Menu.Label>Cuenta</Menu.Label>
        <Menu.Item
          color="red"
          icon={
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              size="sm"
              className={classes.icon}
            />
          }
          onClick={onLogoutHandler}
        >
          Cerrar sesión
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserAvatarDropdown;
