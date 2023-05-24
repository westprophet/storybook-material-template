/**
 * Created by westp on 15.05.2023
 */

import React, { ReactNode } from "react";
import s from "./FixColumn.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode
}

//Обертка над любым элемекнтом для того что бы он не расширялся больше чем колонка в сжатом виде
export default function FixColumn({ className = "", children }: Props) {
  return (
    <div className={cn(s.FixColumn, className)}>
      {children}
    </div>
  );
}




