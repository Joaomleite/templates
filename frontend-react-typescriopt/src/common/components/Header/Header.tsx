import { Button } from '@mui/material';
import React from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { useApplication } from '../../../hooks/useApplication';
import { HeaderBox, HeaderLeftContent, HeaderCenterContent, HeaderName, HeaderRightContent } from '../../styled/main.styled';

export default function Header() {
  let { openMenu } = useApplication();
  return (
    <HeaderBox>
      <HeaderLeftContent>
        <Button onClick={openMenu}>
          <MenuIcon />
        </Button>
      </HeaderLeftContent>
      <HeaderCenterContent>
        <HeaderName>+Cadastro Digital</HeaderName>
      </HeaderCenterContent>
      <HeaderRightContent></HeaderRightContent>
    </HeaderBox>
  );
}
