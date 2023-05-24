/**
 * Created by westp on 15.05.2023
 */

import React, { ReactNode, useContext } from "react";
import s from "./Menu.module.scss";
import cn from "classnames";
import MenuListGenerator from "../../../../components/Menu/MenuListGenerator";
import { IMenuItemProps } from "../../../../components/Menu/components/MenuItem";

interface Props {
  className?: string;
  children?: ReactNode;
  items?: IMenuItemProps[];
}

//Меню сайдабара
export default function Menu({ className = "", children, items }: Props) {
  return (
    <nav className={cn(s.Menu, className)}>
      {/*Если нет items вернет children*/}
      <MenuListGenerator items={items} inline>
        {children}
      </MenuListGenerator>
    </nav>
  );
}




