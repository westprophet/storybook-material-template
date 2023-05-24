/**
 * Created by westprophet on 02.08.2022
 */

import React, { ReactNode } from 'react';
import s from './PageTitle.module.scss';
import cn from 'classnames';

import { Breadcrumbs, IconButton, Link as RouterLink } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ChevronLeft } from '@mui/icons-material';
import { useBreakpoints } from 'react-responsive-tools-scss';

//Компонент заголовка страницы рендерится через портал если дексктопная версия
//Но если мобильная версия то рендерится как обычно в элемент где был вызван компонент
export default function PageTitle({
  className,
  title,
  breadcrumbs,
  enableBack = false,
}: IPageTitleProps) {
  const b = useBreakpoints();
  const n = useNavigate();
  const container = document.getElementById('header-title');
  if (!container) return null;
  const inner: ReactNode = (
    <div className={cn(s.PageTitle, className)}>
      {enableBack ? (
        <IconButton className={cn(s.back)} onClick={() => n(-1)}>
          <ChevronLeft />
        </IconButton>
      ) : null}
      <div className={cn(s.inner)}>
        <h1>{title}</h1>
        <Breadcrumbs aria-label="breadcrumb" className={cn(s.breadcrumbs)}>
          <Link to="/" aria-current="page">
            Головна
          </Link>
          {breadcrumbs?.map((bc: TBreadcrumb) => {
            const key = `${bc.label}`;
            if (!bc.href)
              return (
                <RouterLink key={key} aria-current="page">
                  {bc.label}
                </RouterLink>
              );
            else
              return (
                <Link key={key} to={bc.href} aria-current="page">
                  {bc.label}
                </Link>
              );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
  if (b.lg) return ReactDOM.createPortal(inner, container);
  else return inner;
}

interface IPageTitleProps {
  className?: string;
  title: string;
  breadcrumbs?: TBreadcrumb[];
  enableBack?: boolean;
}

//Хлебные крошки
export interface TBreadcrumb {
  href?: string;
  label: string;
}
