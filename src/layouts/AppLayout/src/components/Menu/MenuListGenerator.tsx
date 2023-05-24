/**
 * Created by westp on 25.04.2023
 */

import React from 'react';

import MenuItem, {
  IMenuItemActionsProps,
  IMenuItemProps,
} from './components/MenuItem';

interface Props extends IMenuItemActionsProps {
  items?: IMenuItemProps[];
  children?: any;
}

//Простой компонент который преобразует массив в пункты меню и рендерит их
//Служит для генерации меню на основе массива обьектов
export default function MenuListGenerator(p: Props) {
  if (Array.isArray(p.items)){
    const { items, children } = p;
    //Удаляем всех членов которые не IMenuItemActionsProps
    const actions: Exclude<IMenuItemActionsProps, Required<Props>> = {
      ...p,
    };
    return (
      <>
        {items.map((i: IMenuItemProps) => {
          const a = { ...i, ...actions, children: null, items: null };
          return <MenuItem key={i.title} {...a} />;
        })}
        {children}
      </>
    );
  }
  else return p.children;
}


