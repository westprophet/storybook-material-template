/**
 * Created by westp on 14.05.2023
 */

import React, { ReactNode } from "react";
import s from "./Head.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Head({ className = "", children }: Props) {
  return (
    <div className={cn(s.Head, className)}>
      {children}
    </div>
  );
}




