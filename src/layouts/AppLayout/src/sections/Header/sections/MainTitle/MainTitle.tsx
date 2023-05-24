/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./MainTitle.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
}

export default function MainTitle({ className = "" }: Props) {
  return (
    <div className={cn(s.MainTitle, className)} id="header-title"></div>
  );
}




