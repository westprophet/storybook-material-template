/**
 * Created by westp on 26.07.2022
 */

import React, { ReactNode, useContext } from "react";

import s from './Sidebar.module.scss';
import cn from 'classnames';

import { Menu } from '@mui/icons-material';

import { IconButton, Tooltip } from '@mui/material';
import AppLayoutContext from '../../../AppLayoutContext';

interface ISidebarProps {
  className?: string;
  children: ReactNode;
}

export default function Sidebar({ className, children }: ISidebarProps) {
  const {toggleCompactSidebar } = useContext(AppLayoutContext);

  // const n = useNavigate();

  return (
    <div className={cn(s.Sidebar, className)}>
      <Tooltip title="Компактный выгляд" placement="right">
        <IconButton
          onClick={toggleCompactSidebar}
          className={cn(s.burger)}
          size="small"
        >
          <Menu />
        </IconButton>
      </Tooltip>

      {/*<Logo title={"ТАТЛ"} withTitle={isWidthMode} />*/}

      {children}
      {/*<div className={cn(s.logoContainer)}>*/}
      {/*  <div className={cn(s.logo)}>*/}
      {/*    <img alt="Єдина школа" src="/Logo.svg" />*/}
      {/*  </div>*/}
      {/*  {isWidthMode && (*/}
      {/*    <div className={cn(s.textLogo)}>Аналiтика i звiтування</div>*/}
      {/*  )}*/}
      {/*</div>*/}


      {/*<div className={cn(s.top)}>*/}
      {/*  <Tooltip title="Повернутися" placement="right">*/}
      {/*    <IconButton className={cn(s.back)} onClick={() => n(-1)}>*/}
      {/*      <ChevronLeft />*/}
      {/*    </IconButton>*/}
      {/*  </Tooltip>*/}
      {/*</div>*/}
      {/*<div className={cn(s.content)}>{children}</div>*/}
      {/*<div className={cn(s.bottom)}>*/}
      {/*  <IconButton>*/}
      {/*    <KeyboardArrowUp />*/}
      {/*  </IconButton>*/}
      {/*</div>*/}
    </div>
  );
}

