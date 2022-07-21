import { Box, Button, Drawer } from '@mui/material';
import React, { useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useApplication } from '../../../hooks/useApplication';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import LogoutIcon from '@mui/icons-material/Logout';
import styled from '@emotion/styled';
import { useRoutes } from '../../../hooks/useRoutes';
export type MenuIcon = {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export function MenuItem({ text, icon, onClick }: MenuIcon) {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

const MenuHeader = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MenuFooter = styled.div`
  margin-top: auto;
`;

export default function Menu() {
  let { menuState, closeMenu } = useApplication();
  let { routes } = useRoutes();

  const renderMenuItems = useMemo(() => {
    const MENU_ITEMS = [
      {
        text: 'Home',
        icon: <AddIcon />,
        onClick: () => routes.home(),
      },
    ];

    return MENU_ITEMS.map((m, k) => <MenuItem key={k} {...m} />);
  }, [routes]);

  return (
    <Drawer anchor={'left'} open={menuState} onClose={closeMenu}>
      <Box sx={{ width: 250, height: '100%' }} role="presentation" onClick={closeMenu} onKeyDown={closeMenu}>
        <MenuBox>
          <MenuHeader>
            <Button onClick={closeMenu}>
              <CloseIcon style={{ color: '#000', fontSize: 24 }} />
            </Button>
            <MenuTitle>Menu</MenuTitle>
            <Button></Button>
          </MenuHeader>
          <Divider />

          {renderMenuItems}

          <MenuFooter>
            <MenuItem icon={<LogoutIcon />} text={'Sair'} onClick={() => console.error('Not implemented!')} />
          </MenuFooter>
        </MenuBox>
      </Box>
    </Drawer>
  );
}
