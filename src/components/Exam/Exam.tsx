/**
 * Created by westprophet on 03.05.2023
 */
import React from 'react';
import cn from 'classnames';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

import s from './Exam.module.scss';

export default function Exam({ label = 'Текст', ...rest }: Props) {
  return (
        <MuiButton {...rest} className={cn(s.Exam, rest.className)}>{label}</MuiButton>
  );
}

export interface Props extends MuiButtonProps {
  label: string;
}
