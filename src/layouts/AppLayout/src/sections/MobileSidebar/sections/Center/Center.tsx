/**
 * Created by westp on 14.05.2023
 */

import React, { ReactNode } from "react";
import s from "./Center.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Center({ className = "", children }: Props) {
  return (
    <div className={cn(s.Center, className)}>
      {children}
    </div>
  );
}




