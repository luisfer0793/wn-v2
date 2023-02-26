import { forwardRef } from 'react';
import {
  Avatar,
  Group,
  MantineColor,
  SelectItemProps,
  Text,
} from '@mantine/core';

interface UserProfileItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
  name: string;
}

const AutocompleteUserProfileItem = forwardRef<
  HTMLDivElement,
  UserProfileItemProps
>(({ description, label, image, ...restProps }, ref) => (
  <div ref={ref} {...restProps}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text>{label}</Text>
        <Text size="xs" color="dimmed">
          {description}
        </Text>
      </div>
    </Group>
  </div>
));

export default AutocompleteUserProfileItem;
