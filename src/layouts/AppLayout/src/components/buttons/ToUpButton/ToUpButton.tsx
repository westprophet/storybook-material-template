/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./ToUpButton.module.scss";
import cn from "classnames";
import { IconButton, IconButtonProps } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";


export default function ToUpButton(p: IconButtonProps) {
  return (
      <IconButton {...p} className={cn(s.ToUpButton, p.className)}>
        <KeyboardArrowUp />
      </IconButton>
  );
}




