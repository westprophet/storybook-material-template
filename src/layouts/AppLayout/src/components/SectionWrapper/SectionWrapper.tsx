/**
 * Created by westp on 27.07.2022
 */

import React from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';

export default function SectionWrapper({
  className,
  children,
}: ISectionWrapperProps) {
  return <div className={cn(s.SectionWrapper, className)}>{children}</div>;
}

SectionWrapper.defaultProps = {
  className: '',
};

interface ISectionWrapperProps {
  className?: string;
  children: any;
}
