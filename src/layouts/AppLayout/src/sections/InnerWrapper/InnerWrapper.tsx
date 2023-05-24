/**
 * Created by westp on 24.04.2023
 */

import React from 'react';
import s from './InnerWrapper.module.scss';
import cn from 'classnames';

export default function InnerWrapper({ className = '', children }: Props) {
  return <div className={cn(s.InnerWrapper, className)}>{children}</div>;
}

interface Props {
  className?: string;
  children: any;
}
