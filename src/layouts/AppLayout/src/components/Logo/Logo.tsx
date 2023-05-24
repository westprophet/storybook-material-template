/**
 * Created by westp on 14.05.2023
 */

import React from "react";
import s from "./Logo.module.scss";
import cn from "classnames";

export default function Logo({ className = "",withTitle = true, title = "Єдина школа" }: Props) {
  return (
    <div className={cn(s.Logo, className)}>
      <div className={cn(s.container)}>
        <img alt={`Єдина школа: ${title}`} src="/logo.svg" />
      </div>
      {withTitle && <div className={cn(s.title)}>{title}</div>}
    </div>
  );
}

export interface Props {
  className?: string;
  title: string;
  withTitle?: boolean;
}


