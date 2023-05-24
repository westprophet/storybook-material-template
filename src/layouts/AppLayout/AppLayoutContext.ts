import { createContext } from 'react';

export const DEFAULT_LAYOUT_INITIAL_VALUE = {
  toggleCompactSidebar: () => {},
  toggleMobileSidebar: () => {},
  data: {
    isWidthMode: false,
    isOpenMobileSidebar: false,
  },
};

export default createContext<ContextValue>(DEFAULT_LAYOUT_INITIAL_VALUE);

export interface ContextValue {
  data: StateValue;
  toggleCompactSidebar(): any; //Переключение сайдбара
  toggleMobileSidebar(v?: boolean): any; //Переключение мобильного меню
}

export interface StateValue {
  isWidthMode: boolean;
  isOpenMobileSidebar: boolean;
}
