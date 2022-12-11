import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import g from './Images/g.jpg';
export default function Picture() {
  return (
    <AvatarGroup className='id' total={1}>
      <Avatar alt="Remy Sharp" src = {g} width = "1000" height="1000" style={{position: 'fixed', top:"10px"}}/>Suraj Kumar
    </AvatarGroup>
  );
}