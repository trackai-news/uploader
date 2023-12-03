import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './CategorySelector.module.css';
import Cookies from 'js-cookie';
import { encode, decode } from 'js-base64';

const data = [
  { label: 'Ai Companies & Startups'},
  { label: 'Ai Stocks'},
  { label: 'Electric Cars'},
  { label: 'Financial Technology'},
  { label: 'Medical'},
  { label: 'Entertainment'},
];

export function CategorySelector() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  function cookieCategory() {
    Cookies.set('articleCategory', selected.label);
  }
  const items = data.map((item) => (
    <Menu.Item
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown onChange={cookieCategory()}>{items}</Menu.Dropdown>
    </Menu>
  );
}