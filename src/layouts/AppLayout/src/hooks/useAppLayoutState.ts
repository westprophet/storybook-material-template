import { useCallback, useState } from 'react';

import {
  DEFAULT_LAYOUT_INITIAL_VALUE as INIT,
  ContextValue,
} from '../../AppLayoutContext';

import useLocalStorage from 'use-local-storage';


//Инициализируем состояние лаяута для передачи в контекст в дальнейшем
export default function useAppLayoutState(
  appNameKey = '' //Ключь для индентификации приложения
): ContextValue {
  const { data } = INIT;
  //Ширина лаяута menu записывается
  const [isWidthMode, setIsCompactSidebar] = useLocalStorage(
    `${appNameKey}-layout-compact`,
    data.isWidthMode
  );

  const [isOpenMobileSidebar, setIsOpenHiddenBar] = useState(
    data.isOpenMobileSidebar
  );

  //Переключение режима компактности сайдбара меню
  const toggleCompactSidebar = useCallback(
    () => setIsCompactSidebar(!isWidthMode),
    [isWidthMode, setIsCompactSidebar]
  );

  //Открытие и закрытие сайдбара
  const toggleMobileSidebar = useCallback(
    (v: boolean) =>
      setIsOpenHiddenBar(v !== undefined ? v : !isOpenMobileSidebar),
    [isOpenMobileSidebar]
  );

  return {
    toggleCompactSidebar,
    toggleMobileSidebar,
    data: {
      isWidthMode,
      isOpenMobileSidebar,
    },
  };
}
