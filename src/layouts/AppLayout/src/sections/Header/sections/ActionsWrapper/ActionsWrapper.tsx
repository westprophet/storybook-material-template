/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./ActionsWrapper.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  children: any;
}

// Обертка над зоной действий
export default function ActionsWrapper({ className = "", children }: Props) {
  return (
    <div className={cn(s.ActionsWrapper, className)}>
      {children}
    </div>
  );
}



