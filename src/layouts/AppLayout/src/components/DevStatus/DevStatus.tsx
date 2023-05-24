/**
 * Created by westp on 27.02.2023
 */

import React from 'react';
import s from './DevStatus.module.scss';
import cn from 'classnames';

export default function DevStatus() {
  if (process.env.REACT_APP_MODE !== 'production')
    return (
      <div className={cn(s.DevStatus, process.env.REACT_APP_MODE)}>
        <span>Mode: {process.env.REACT_APP_MODE}</span>
        <span>API: {process.env.REACT_APP_API_MODE}</span>
      </div>
    );
  return null;
}
