/**
 * Created by westp on 27.07.2022
 */

import React, { ReactNode, useContext } from "react";
import s from './MobileSidebar.module.scss';
import cn from 'classnames';
import { Backdrop } from '@mui/material';
import AppLayoutContext from '../../../AppLayoutContext';

interface IMobileSidebarProps {
  className?: string;
  children: ReactNode;
}

// import ProfileButton from '../../components/ProfileButton';

// Скрытый сайдлбар (обычно используется как выдвижное меню на мобайле)
export default function MobileSidebar({
  className,
  children,
}: IMobileSidebarProps) {
  const { toggleMobileSidebar, data } = useContext(AppLayoutContext);
  const onCloseHandler = () => toggleMobileSidebar(false);
  const isOpen = data.isOpenMobileSidebar;

  return (
    <>
      <div className={cn(s.MobileSidebar, { [s.open]: isOpen }, className)}>
        {children}
        {/*<div className={cn(s.profile)}>/!*<ProfileButton />*!/</div>*/}
      </div>
      <Backdrop open={isOpen} onClick={onCloseHandler} className={cn(s.back)} />
    </>
  );
}

