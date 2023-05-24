/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./NotificationButton.module.scss";
import cn from "classnames";
import { IconButton, IconButtonProps } from "@mui/material";
import { NotificationsOutlined } from "@mui/icons-material";

interface Props extends IconButtonProps{
  className?: string;
}

export default function NotificationButton(p: Props) {
  return (
    <IconButton {...p} className={cn(s.NotificationButton, p.className)} disabled >
        <NotificationsOutlined />
    </IconButton>
  );
}




