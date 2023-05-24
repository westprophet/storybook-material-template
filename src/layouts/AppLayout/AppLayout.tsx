/**
 * Created by westprophet on 26.07.2022
 */

import React from 'react';

import cn from 'classnames';
import s from './AppLayout.module.scss';

import AppLayoutContext from './AppLayoutContext';


// import DevStatus from '../../components/DevStatus';
import useAppLayoutState from './src/hooks/useAppLayoutState';
import DevStatus from "./src/components/DevStatus";

interface IAppLayoutProps {
  className?: string;
  children?: any;
  appNameKey?: string; //Имя приложения
}

// Лаяут
export default function AppLayout({
  className,
  children,
  appNameKey = 'app-key',
  // contextValue,
}: IAppLayoutProps) {
  const value = useAppLayoutState(appNameKey);
  return (
    <AppLayoutContext.Provider value={value}>
      <main
        className={cn(
          s.AppLayout,
          { [s.widthMode]: value.data.isWidthMode },
          className
        )}
      >
        {children}
      </main>
      <DevStatus />
    </AppLayoutContext.Provider>
  );
}
