/**
 * Created by westp on 14.05.2023
 */

import React, { useContext } from "react";
import s from "./Logo.module.scss";
import cn from "classnames";

import Logo, { Props as LogoProps } from "../../../../components/Logo";

import AppLayoutContext from "../../../../../AppLayoutContext";

export default function SidebarLogo(p: LogoProps) {
  const { data } = useContext(AppLayoutContext);
  const isWidthMode = data.isWidthMode;
  return (
    <Logo {...p} className={cn(s.Logo, p.className)} withTitle={isWidthMode}/>
  );
}




