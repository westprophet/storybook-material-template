/**
 * Created by westp on 14.05.2023
 */

import React, { useContext } from "react";
import s from "./MobileMenuButton.module.scss";
import cn from "classnames";
import { IconButton, IconButtonProps } from "@mui/material";
import { CloseOutlined, Menu } from "@mui/icons-material";
import AppLayoutContext from "../../../../../../AppLayoutContext";

interface Props extends IconButtonProps{
  className?: string;
}

export default function MobileMenuButton(p: Props) {
  const { data, toggleMobileSidebar } = useContext(AppLayoutContext);
  return (
    <IconButton {...p} className={cn(s.MobileMenuButton, p.className)} onClick={() => toggleMobileSidebar()}>
      {!data.isOpenMobileSidebar ? <Menu /> : <CloseOutlined />}
    </IconButton>
  );
}




