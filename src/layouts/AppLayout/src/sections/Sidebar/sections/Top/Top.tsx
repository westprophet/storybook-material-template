/**
 * Created by westp on 14.05.2023
 */

import React, { ReactNode } from "react";
import s from "./Top.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Top({ className = "", children }: Props) {
  return (
    <div className={cn(s.Top, className)}>
      {children}
    </div>
  );
}




