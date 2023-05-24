/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./Logo.module.scss";
import cn from "classnames";
import Logo, { Props as LogoProps } from "../../../../components/Logo";
import { useBreakpoints } from "react-responsive-tools-scss";

export interface Props extends LogoProps{
  disableUnvisibleLogic?: boolean;
}

export default function HeaderLogo(p: Props) {
  const b = useBreakpoints();
  if(!b.lg || p.disableUnvisibleLogic)
    return (
      <Logo {...p} className={cn(s.HeaderLogo, p.className)}/>
    );
  else return null;
}




