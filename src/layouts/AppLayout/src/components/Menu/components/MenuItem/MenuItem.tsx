/**
 * Created by westp on 26.07.2022
 */

import React, { useContext, ReactNode } from 'react';
import cn from 'classnames';
import s from './MenuItem.module.scss';

import { Button } from '@mui/material';

import * as Icons from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import AppLayoutContext from '../../../../../AppLayoutContext';

//Просто компонент меню для сайдбара и мобильного меню
export default function MenuItem({
  className = '',
  title,
  icon, // Название Иконки материала
  inline, //Используется в мобилной версии
  link,
  onClick,
  active, // Используется если мы находимся в нужном разделе
  disabled,
}: IMenuItemProps) {
  const n = useNavigate();
  const { toggleMobileSidebar } = useContext(AppLayoutContext);

  const onClickHandler = () => {
    if (onClick) onClick();
    else if (link) {
      n(link);
      toggleMobileSidebar(false);
    }
  };

  let _icon = icon;
  if (typeof icon === 'string') {

    // @ts-ignore
    const Icon = Icons[icon];
    _icon = <Icon/>;
  }

  return (
    <Button
      disabled={disabled}
      className={cn(
        s.MenuItem,
        { [s.inline]: inline },
        { [s.active]: active },
        className
      )}
      onClick={onClickHandler}
    >
      <div className={cn(s.icon)}>{_icon}</div>
      {title && <div className={cn(s.title)}>{title}</div>}
    </Button>
  );
}
export interface IMenuItemActionsProps {
  inline?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}
export interface IMenuItemProps extends IMenuItemActionsProps {
  title?: string;
  icon: ReactNode | string;
  link?: any;
  onClick?: any;
}


//Icons EXAMPLE
//https://mui.com/material-ui/icons/#icon-font-icons
/*
1. <Icon>star</Icon>, <Icon>add_circle</Icon>;
2.
<IconButton aria-label="delete">
  <SvgIcon>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </SvgIcon>
</IconButton>;
3. <HomeIcon color="primary" />

*/
