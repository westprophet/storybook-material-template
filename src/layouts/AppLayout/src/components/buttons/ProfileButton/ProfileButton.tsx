/**
 * Created by westp on 27.07.2022
 */

import React, { ReactNode, useCallback } from 'react';

import s from './ProfileButton.module.scss';
import cn from 'classnames';

import {
  Avatar,
  Button,
  // ListItemIcon,
  Menu,
  // MenuItem,
  // Skeleton,
  Tooltip,
} from '@mui/material';

// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export const size = 32;
export default function ProfileButton({
  className,
  fullname = undefined,
  children,
  title = 'Профіль',
  separator = ' ',
}: IProfileButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Если имя не указали
  const isNoNameData = typeof fullname === 'undefined';

  // Абревиатура если указано полное имя
  const abbreviation = !isNoNameData
    ? `${fullname.split(separator)[0]} ${fullname.split(separator)[1]}`
    : '';

  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <>
      <Tooltip title={title}>
        <Button onClick={handleClick} size="small">
          <Avatar
            sx={{ width: size, height: size }}
            className={cn(s.ProfileButton, className)}
            alt={!isNoNameData ? fullname : 'settings'}
          >
            {!isNoNameData ? abbreviation : null}
          </Avatar>
          <div className={cn(s.title)}>{fullname}</div>
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {children}

        {/*<MenuItem onClick={() => n('/settings/')}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <ManageAccountsIcon fontSize="small" />*/}
        {/*  </ListItemIcon>*/}
        {/*  Профіль*/}
        {/*</MenuItem>*/}
        {/*<MenuItem onClick={logout}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <PowerSettingsNewIcon fontSize="small" />*/}
        {/*  </ListItemIcon>*/}
        {/*  Вихід*/}
        {/*</MenuItem>
         */}
      </Menu>
    </>
  );
}

interface IProfileButtonProps {
  className?: string;
  fullname?: string;
  title?: string;
  children?: ReactNode;
  separator?: string;
}
