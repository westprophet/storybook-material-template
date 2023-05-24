/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./BackButton.module.scss";
import cn from "classnames";

import { useNavigate } from "react-router-dom";

import {
  ChevronLeft
} from "@mui/icons-material";

import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

interface Props {
  className?: string;
}

export default function BackButton(p: IconButtonProps) {
  const n = useNavigate();
  return (
    <Tooltip title="Повернутися назад" placement="right" className={cn(s.BackButton, p.className)}>
      <IconButton {...p} className={cn(s.back)} onClick={() => n(-1)}>
        <ChevronLeft />
      </IconButton>
    </Tooltip>
  );
}




