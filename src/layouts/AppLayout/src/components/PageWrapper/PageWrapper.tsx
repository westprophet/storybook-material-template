/**
 * Created by westp on 27.07.2022
 */

import React from 'react';
import s from './PageWrapper.module.scss';
import cn from 'classnames';

export default function PageWrapper({
  className,
  children,
}: IPageWrapperProps) {
  return <div className={cn(s.PageWrapper, className)}>{children}</div>;
}

PageWrapper.defaultProps = {
  className: '',
};

interface IPageWrapperProps {
  className?: string;
  children: any;
}
