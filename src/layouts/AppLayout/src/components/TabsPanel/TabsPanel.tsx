/**
 * Created by westp on 15.08.2022
 */

import React from 'react';
import s from './TabsPanel.module.scss';
import cn from 'classnames';

export default function TabsPanel({ className, right, left }: ITabsPanelProps) {
  return (
    <div className={cn(s.TabsPanel, className)}>
      {left && <div className={cn(s.left)}>{left}</div>}
      {right && <div className={cn(s.right)}>{right}</div>}
    </div>
  );
}

TabsPanel.defaultProps = {
  className: '',
};

interface ITabsPanelProps {
  className?: string;
  left?: any;
  right?: any;
}
