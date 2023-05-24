/**
 * Created by westp on 26.07.2022
 */

import React, { ReactNode } from "react";

import s from './Header.module.scss';
import cn from 'classnames';


export default function Header({
  className,
  children,
}: IHeaderProps) {

  return (
    <header className={cn(s.Header, className)} >
      {children}
      {/*<div id="header-title"></div>*/}
    </header>
  );
}

interface IHeaderProps {
  className?: string;
  children: ReactNode;
}
